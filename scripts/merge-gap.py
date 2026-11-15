#!/usr/bin/env python3
"""Map the gap-research CSVs onto the site schema. Does not average disagreements."""

import csv
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "research" / "data"
GAP = Path("/tmp/gap-data")
CHECKED = "2026-11-14"

MODEL_FIELDS = [
    "brand", "model", "series",
    "engine_hp", "engine_unit_note", "engine_status", "engine_source",
    "pto_hp", "pto_note", "pto_status", "pto_source",
    "hitch", "hitch_status", "hitch_source",
    "rear_lift_lb", "rear_lift_point", "rear_lift_status", "rear_lift_source",
    "loader_model", "loader_lift_lb", "loader_lift_point", "loader_status", "loader_source",
    "weight_lb", "weight_status", "weight_source",
    "transmission", "transmission_status", "transmission_source",
    "tires", "tires_status", "tires_source",
    "source_url", "checked", "notes",
]

ALIASES = {
    ("Kubota", "B2401DT / B2401DTWO"): "B2401DT",
    ("Kubota", "L3770 Deluxe"): "L3770",
    ("Kubota", "L4270 Deluxe"): "L4270",
    ("Kubota", "L3970 Premium"): "L3970",
    ("Kubota", "L4470 Premium"): "L4470",
    ("Kubota", "L5070 Premium"): "L5070",
    ("Kubota", "L6070 Premium"): "L6070",
}


def brand_name(brand):
    return "Kioti" if brand.upper() == "KIOTI" else brand


def read_csv(path):
    with path.open(newline="") as handle:
        return list(csv.DictReader(handle))


def write_csv(path, header, rows):
    with path.open("w", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=header, extrasaction="ignore")
        writer.writeheader()
        for row in rows:
            writer.writerow({key: row.get(key, "") for key in header})


def parse_source(raw):
    text = (raw or "").strip()
    if not text or text.lower().startswith("not printed"):
        return "", "", ""
    first = text.split("||")[0]
    parts = [part.strip() for part in first.split("|")]
    url = parts[0] if parts and parts[0].startswith("http") else ""
    title = parts[1] if len(parts) > 1 else ""
    date = parts[2] if len(parts) > 2 else CHECKED
    return url, title, date


def source_cell(raw):
    url, title, date = parse_source(raw)
    if not url:
        return ""
    return f"{url} | {title} | {date}"


def numbers(text):
    return [float(item) for item in re.findall(r"\d+(?:\.\d+)?", (text or "").replace(",", ""))]


def agrees(old, new):
    old, new = (old or "").strip(), (new or "").strip()
    if not old or not new:
        return None
    old_nums, new_nums = numbers(old), numbers(new)
    if old_nums and new_nums:
        if any(abs(new_nums[0] - item) < 0.051 for item in old_nums):
            return True
        if any(abs(old_nums[0] - item) < 0.051 for item in new_nums):
            return True
        return False
    return re.sub(r"\s+", " ", old.lower()) == re.sub(r"\s+", " ", new.lower())


def hitch_class(text):
    value = (text or "").lower()
    if not value:
        return ""
    if "limited" in value and re.search(r"\band\b", value):
        return "limited-and-cat1"
    if "limited" in value:
        return "limited"
    if re.search(r"1\s*/\s*2|i\s+and\s+ii|1\s+and\s+2", value):
        return "both"
    if re.search(r"cat", value):
        return "cat"
    return value


def trans_kind(text):
    value = (text or "").lower()
    if "hydro" in value or re.search(r"\bhst\b", value):
        return "hst"
    if any(token in value for token in ("shuttle", "gear", "manual", "synchro", "12f", "f12", "16f")):
        return "gear"
    return value.strip()


def trans_agrees(old, new):
    if not (old or "").strip() or not (new or "").strip():
        return None
    if "named on the" in old.lower():
        return None
    folded_old = re.sub(r"[^a-z0-9]+", " ", old.lower()).strip()
    folded_new = re.sub(r"[^a-z0-9]+", " ", new.lower()).strip()
    if folded_new in folded_old or folded_old in folded_new:
        return True
    return trans_kind(old) == trans_kind(new) and trans_kind(old) in {"hst", "gear"}


def hitch_agrees(old, new):
    if not (old or "").strip() or not (new or "").strip():
        return None
    return hitch_class(old) == hitch_class(new) and hitch_class(old) != ""


def variant_bits(variant):
    text = variant.lower()
    bits = []
    if "2wd" in text:
        bits.append("2WD")
    if "4wd" in text:
        bits.append("4WD")
    if "narrow" in text:
        bits.append("narrow")
    if "cab or non-cab" in text or "rops or cab" in text:
        bits.append("ROPS or cab")
    elif "non-cab" in text:
        bits.append("open")
    elif re.search(r"\bcab\b", text):
        bits.append("cab")
    elif "rops" in text:
        bits.append("ROPS")
    has_hst = "hst" in text or "hydrostatic" in text
    has_gear = any(token in text for token in ("gear", "manual", "synchro", "12x12", "16x16", "9f"))
    shuttle_only = "shuttle" in text and "synchro" not in text and "mechanical shuttle" not in text
    if "servo" in text and has_hst and not has_gear:
        bits.append("servo HST")
    elif has_hst and has_gear:
        bits.append("gear and HST")
    elif has_hst:
        bits.append("HST")
    elif shuttle_only:
        bits.append("shuttle")
    elif has_gear:
        bits.append("gear")
    return bits


def display_model(row, needs_suffix, needs_series):
    model = row["model"].replace("MF ", "").strip()
    if needs_series:
        series = "Workmaster" if "Workmaster" in row["series"] else "Boomer" if "Boomer" in row["series"] else row["series"]
        model = f"{series} {model}"
    if row["brand"] == "Case IH":
        model = f"Farmall {model}"
    if needs_suffix:
        bits = variant_bits(row["variant"])
        if bits:
            model = f"{model} {' '.join(bits)}"
        else:
            model = f"{model} {row['variant']}"
    return model


def blank_model():
    return {key: "" for key in MODEL_FIELDS}


def first_source(row):
    for key in (
        "pto_hp_source", "engine_hp_source", "hitch_category_source", "rear_lift_source",
        "loader_lift_source", "weight_source", "transmission_source",
    ):
        url, title, date = parse_source(row.get(key, ""))
        if url:
            return url, title, date
    return "", "", CHECKED


def apply_field(target, old_value, new_value, new_status, new_source, value_key, status_key, source_key, old_label, new_label, text_agree=None):
    new_status = (new_status or "").strip()
    new_value = (new_value or "").strip()
    if not new_value or new_status.upper().startswith("UNVERIFIED"):
        return None
    old_value = (target.get(value_key) or old_value or "").strip()
    same = text_agree(old_value, new_value) if text_agree else agrees(old_value, new_value)
    source = source_cell(new_source)
    if new_status.upper().startswith("CONFLICT") or (old_value and same is False):
        if old_value and same is not True:
            quoted = f"{old_label}: {old_value}. {new_label}: {new_value}."
        else:
            quoted = new_value
        target[value_key] = quoted
        target[status_key] = "CONFLICT"
        target[source_key] = join_sources(target.get(source_key, ""), source)
        return "conflict"
    if not old_value:
        target[value_key] = new_value
        target[status_key] = "VERIFIED"
        target[source_key] = source
        return "filled"
    target[source_key] = join_sources(target.get(source_key, ""), source)
    if not target.get(status_key):
        target[status_key] = "VERIFIED"
    return "agreed"


def join_sources(left, right):
    parts = []
    for item in (left, right):
        item = (item or "").strip()
        if item and item not in parts:
            parts.append(item)
    return " || ".join(parts)


def main():
    old_rows = read_csv(DATA / "models.csv")
    for row in old_rows:
        for key in MODEL_FIELDS:
            row.setdefault(key, "")
    index = {(row["brand"], row["model"]): row for row in old_rows}
    gap_rows = read_csv(GAP / "models.csv")
    report = {"dropped": [], "merged": [], "created": [], "conflicts": [], "agreed": []}

    groups = defaultdict(list)
    for row in gap_rows:
        if row["brand"] == "John Deere" and ("loader" in row["series"].lower() or "," in row["model"]):
            report["dropped"].append(f"{row['brand']} {row['model']}: not a single tractor, and the tractor fields were not re-collected")
            continue
        if not any(not (row[key] or "").upper().startswith("UNVERIFIED") and (row[key.replace("_status", "")] if False else True) for key in ()):
            pass
        groups[(brand_name(row["brand"]), row["series"], row["model"])].append(row)

    # A model code that already exists should absorb every gap variant of that code.
    existing_groups = defaultdict(list)
    fresh = []
    for (brand, series, model), rows in groups.items():
        key_model = ALIASES.get((brand, model), model.replace("MF ", ""))
        if (brand, key_model) in index:
            existing_groups[(brand, key_model)].extend(rows)
        else:
            fresh.append((brand, series, model, rows))

    for (brand, model), rows in existing_groups.items():
        target = index[(brand, model)]
        old_source = target["source_url"]
        for row in rows:
            url, title, _date = first_source(row)
            new_label = title or "Gap document"
            old_label = "Earlier row"
            changes = []
            for spec in (
                ("engine_hp", "engine_status", "engine_source", "engine_hp", "engine_hp_status", "engine_hp_source", None),
                ("pto_hp", "pto_status", "pto_source", "pto_hp", "pto_hp_status", "pto_hp_source", None),
            ):
                result = apply_field(
                    target, target[spec[0]], row[spec[3]], row[spec[4]], row[spec[5]],
                    spec[0], spec[1], spec[2], old_label, new_label, spec[6],
                )
                if result:
                    changes.append(f"{spec[0]}:{result}")
            hitch_result = apply_field(
                target, target["hitch"], row["hitch_category"], row["hitch_category_status"], row["hitch_category_source"],
                "hitch", "hitch_status", "hitch_source", old_label, new_label, hitch_agrees,
            )
            if hitch_result:
                changes.append(f"hitch:{hitch_result}")
            lift_result = apply_field(
                target, target["rear_lift_lb"], row["rear_lift_lb"], row["rear_lift_status"], row["rear_lift_source"],
                "rear_lift_lb", "rear_lift_status", "rear_lift_source", old_label, new_label, None,
            )
            if lift_result == "filled" and row["rear_lift_point"]:
                target["rear_lift_point"] = row["rear_lift_point"]
            if lift_result:
                changes.append(f"rear_lift:{lift_result}")
            if (row["loader_lift_status"] or "").startswith("VERIFIED") or (row["loader_lift_status"] or "").startswith("CONFLICT"):
                lift_text = row["loader_lift_lb"]
                if (row["loader_model_status"] or "").startswith("VERIFIED") and row["loader_model"]:
                    if not target["loader_model"]:
                        target["loader_model"] = row["loader_model"]
                loader_result = apply_field(
                    target, target["loader_lift_lb"], lift_text, row["loader_lift_status"], row["loader_lift_source"],
                    "loader_lift_lb", "loader_status", "loader_source", old_label, new_label, None,
                )
                if loader_result == "filled":
                    target["loader_lift_point"] = row["loader_lift_point"]
                    if (row["loader_model_status"] or "").startswith("VERIFIED"):
                        target["loader_model"] = row["loader_model"]
                if loader_result:
                    changes.append(f"loader:{loader_result}")
            elif (row["loader_model_status"] or "").startswith("VERIFIED") and row["loader_model"] and not target["loader_model"]:
                target["loader_model"] = row["loader_model"]
                if not target["loader_status"]:
                    target["loader_status"] = "VERIFIED"
                target["loader_source"] = source_cell(row["loader_model_source"])
                changes.append("loader_model:filled")
            if len(rows) == 1:
                for spec in (
                    ("weight_lb", "weight_status", "weight_source", "weight_lb", "weight_status", "weight_source"),
                    ("tires", "tires_status", "tires_source", "tires", "tires_status", "tires_source"),
                ):
                    result = apply_field(
                        target, target[spec[0]], row[spec[3]], row[spec[4]], row[spec[5]],
                        spec[0], spec[1], spec[2], old_label, new_label, None,
                    )
                    if result:
                        changes.append(f"{spec[0]}:{result}")
            if len(rows) > 1 and (row["weight_status"] or "").startswith("VERIFIED") and row["weight_lb"]:
                labeled = f"{row['variant']}: {row['weight_lb']}"
                if labeled not in (target["weight_lb"] or ""):
                    target["weight_lb"] = (target["weight_lb"] + "; " if target["weight_lb"] else "") + labeled
                target["weight_status"] = "VERIFIED"
                target["weight_source"] = join_sources(target.get("weight_source", ""), source_cell(row["weight_source"]))
            if len(rows) > 1 and (row["tires_status"] or "").startswith("VERIFIED") and row["tires"]:
                labeled = f"{row['variant']}: {row['tires']}"
                if row["tires"] not in (target["tires"] or ""):
                    target["tires"] = (target["tires"] + "; " if target["tires"] else "") + labeled
                target["tires_status"] = "VERIFIED"
                target["tires_source"] = join_sources(target.get("tires_source", ""), source_cell(row["tires_source"]))
            trans_old = target["transmission"]
            vague = "named on the" in trans_old.lower() or not trans_old.strip()
            if (row["transmission_status"] or "").startswith("VERIFIED") and row["transmission"]:
                if len(rows) > 1:
                    labeled = f"{row['variant']}: {row['transmission']}"
                    if vague and target["transmission"] == trans_old and "named on the" in (target["transmission"] or "").lower():
                        target["transmission"] = ""
                    if labeled not in (target["transmission"] or ""):
                        target["transmission"] = (target["transmission"] + "; " if target["transmission"] else "") + labeled
                    target["transmission_status"] = "VERIFIED" if not (row["transmission_status"].startswith("CONFLICT")) else "CONFLICT"
                    target["transmission_source"] = join_sources(target.get("transmission_source", ""), source_cell(row["transmission_source"]))
                    changes.append("transmission:labeled")
                elif vague:
                    target["transmission"] = row["transmission"]
                    target["transmission_status"] = "VERIFIED"
                    target["transmission_source"] = join_sources(target.get("transmission_source", ""), source_cell(row["transmission_source"]))
                    changes.append("transmission:filled")
                else:
                    trans_result = apply_field(
                        target, trans_old, row["transmission"], row["transmission_status"], row["transmission_source"],
                        "transmission", "transmission_status", "transmission_source", old_label, new_label, trans_agrees,
                    )
                    if trans_result:
                        changes.append(f"transmission:{trans_result}")
            if url and url not in (target["source_url"] or ""):
                note = f"Also read {title} ({url})."
                if note not in (target["notes"] or ""):
                    target["notes"] = ((target["notes"] or "").rstrip() + " " + note).strip()
            if row["notes"] and row["notes"] not in (target["notes"] or ""):
                target["notes"] = ((target["notes"] or "").rstrip() + " " + row["notes"]).strip()
            for change in changes:
                if change.endswith(":conflict"):
                    report["conflicts"].append(f"{brand} {model} {change} [{row['variant']}]")
                elif change.endswith(":agreed"):
                    report["agreed"].append(f"{brand} {model} {change}")
            report["merged"].append(f"{brand} {model} <= {row['variant']}: {', '.join(changes) or 'notes only'}")
        if not target["source_url"]:
            target["source_url"] = old_source

    new_rows = []
    for brand, series, model, rows in fresh:
        needs_suffix = len(rows) > 1
        needs_series = brand == "New Holland"
        for row in rows:
            name = display_model(row, needs_suffix, needs_series)
            if (brand, name) in index or any(item["model"] == name and item["brand"] == brand for item in new_rows):
                name = f"{name} {row['variant']}"
            built = blank_model()
            built["brand"] = brand
            built["model"] = name
            built["series"] = series
            url, title, date = first_source(row)
            built["source_url"] = url
            built["checked"] = CHECKED
            built["notes"] = row["notes"]
            specs = [
                ("engine_hp", "engine_unit_note", "engine_status", "engine_source", "engine_hp", "engine_hp_status", "engine_hp_source"),
                ("pto_hp", "pto_note", "pto_status", "pto_source", "pto_hp", "pto_hp_status", "pto_hp_source"),
                ("hitch", None, "hitch_status", "hitch_source", "hitch_category", "hitch_category_status", "hitch_category_source"),
                ("rear_lift_lb", "rear_lift_point", "rear_lift_status", "rear_lift_source", "rear_lift_lb", "rear_lift_status", "rear_lift_source"),
                ("weight_lb", None, "weight_status", "weight_source", "weight_lb", "weight_status", "weight_source"),
                ("transmission", None, "transmission_status", "transmission_source", "transmission", "transmission_status", "transmission_source"),
                ("tires", None, "tires_status", "tires_source", "tires", "tires_status", "tires_source"),
            ]
            kept = False
            for dest, note_key, status_key, source_key, src, src_status, src_source in specs:
                status = (row[src_status] or "").strip()
                value = (row[src] or "").strip()
                if not value or status.upper().startswith("UNVERIFIED"):
                    continue
                built[dest] = value
                built[status_key] = "CONFLICT" if status.upper().startswith("CONFLICT") else "VERIFIED"
                built[source_key] = source_cell(row[src_source])
                if note_key == "rear_lift_point":
                    built["rear_lift_point"] = row["rear_lift_point"]
                if status.upper().startswith("CONFLICT"):
                    report["conflicts"].append(f"{brand} {name} {dest}")
                kept = True
            if (row["loader_lift_status"] or "").startswith(("VERIFIED", "CONFLICT")) and row["loader_lift_lb"]:
                built["loader_lift_lb"] = row["loader_lift_lb"]
                built["loader_lift_point"] = row["loader_lift_point"]
                built["loader_status"] = "CONFLICT" if row["loader_lift_status"].startswith("CONFLICT") else "VERIFIED"
                built["loader_source"] = source_cell(row["loader_lift_source"])
                if (row["loader_model_status"] or "").startswith("VERIFIED"):
                    built["loader_model"] = row["loader_model"]
                kept = True
                if row["loader_lift_status"].startswith("CONFLICT"):
                    report["conflicts"].append(f"{brand} {name} loader_lift")
            elif (row["loader_model_status"] or "").startswith("VERIFIED") and row["loader_model"]:
                built["loader_model"] = row["loader_model"]
                built["loader_status"] = "VERIFIED"
                built["loader_source"] = source_cell(row["loader_model_source"])
                kept = True
            if row["variant"]:
                built["pto_note"] = (built["pto_note"] + " " if built["pto_note"] else "") + f"Variant on the sheet: {row['variant']}."
            if not kept or not built["source_url"]:
                report["dropped"].append(f"{brand} {name}: no verified field with a source URL")
                continue
            new_rows.append(built)
            report["created"].append(f"{brand} {name}")
            # fluid row remembered on the object via notes marker? store beside
            row["_display"] = name
            row["_brand"] = brand

    # Attach display names for fluids from fresh rows
    fluid_rows = []
    for brand, series, model, rows in fresh:
        for row in rows:
            if not row.get("_display"):
                continue
            status = (row["fluid_capacities_status"] or "").strip()
            value = (row["fluid_capacities"] or "").strip()
            if not value or status.upper().startswith("UNVERIFIED"):
                continue
            url, title, date = parse_source(row["fluid_capacities_source"])
            if not url:
                continue
            fluid_rows.append({
                "brand": brand,
                "model": row["_display"],
                "label": "Fluids",
                "value": value,
                "detail": row["notes"] if status.upper().startswith("CONFLICT") else "Printed on the same specification row as the tractor.",
                "status": "CONFLICT" if status.upper().startswith("CONFLICT") else "VERIFIED",
                "source_title": title or "Specification row",
                "source_url": url,
                "checked": CHECKED,
            })
            if status.upper().startswith("CONFLICT"):
                report["conflicts"].append(f"{brand} {row['_display']} fluids")

    # Fluids on merged models use the existing model name
    for (brand, model), rows in existing_groups.items():
        for row in rows:
            status = (row["fluid_capacities_status"] or "").strip()
            value = (row["fluid_capacities"] or "").strip()
            if not value or status.upper().startswith("UNVERIFIED"):
                continue
            url, title, _date = parse_source(row["fluid_capacities_source"])
            if not url:
                continue
            fluid_rows.append({
                "brand": brand,
                "model": model,
                "label": "Fluids",
                "value": value,
                "detail": f"From {row['variant']}.",
                "status": "CONFLICT" if status.upper().startswith("CONFLICT") else "VERIFIED",
                "source_title": title or "Specification row",
                "source_url": url,
                "checked": CHECKED,
            })

    write_csv(DATA / "models.csv", MODEL_FIELDS, old_rows + new_rows)

    # Attachments
    old_att = read_csv(DATA / "attachments.csv")
    att_header = list(old_att[0].keys())
    existing_products = {(row["maker"], re.sub(r"[^a-z0-9]", "", row["model"].lower())) for row in old_att}
    kind_type = {
        "rotary cutter": "rotary cutter",
        "box scraper": "box blade",
        "rear blade": "rear blade",
        "pallet fork": "pallet forks",
        "claw grapple": "grapple",
    }
    added_products = []
    for row in read_csv(GAP / "attachments.csv"):
        code = re.sub(r"[^a-z0-9]", "", row["product"].lower())
        if (row["brand"], code) in existing_products or ("Land Pride", code) in existing_products:
            # same product code already published
            for old in old_att:
                if re.sub(r"[^a-z0-9]", "", old["model"].lower()) == code and old["status"].startswith("VERIFIED"):
                    url, title, _date = parse_source(row["source"])
                    extra = f"A second source, {title}, prints width {row['width']} and range {row['hp_range'] or 'not printed'}: {url}."
                    if url and extra not in old["notes"]:
                        old_hp = old["hp_range"]
                        new_hp = row["hp_range"]
                        if row["hp_range_status"].startswith("VERIFIED") and new_hp and not agrees(old_hp, new_hp):
                            old["hp_range"] = f"Earlier row: {old_hp}. {title}: {new_hp}."
                            old["status"] = "CONFLICT"
                            report["conflicts"].append(f"attachment {row['brand']} {row['product']} hp")
                        elif url not in old["notes"]:
                            old["notes"] = (old["notes"].rstrip() + " " + extra).strip()
                            report["agreed"].append(f"attachment {row['product']} second source")
            continue
        verified_bits = []
        width = row["width"].strip()
        if row["width_status"].startswith("VERIFIED") and width and width.upper() != "UNVERIFIED":
            if re.fullmatch(r"\d+(?:\.\d+)?", width):
                width = f"{width} in"
            verified_bits.append("width")
        else:
            width = ""
        hp = row["hp_range"].strip() if row["hp_range_status"].startswith("VERIFIED") else ""
        if hp:
            if re.fullmatch(r"\d+\s*-\s*\d+", hp):
                hp = f"{hp.replace(' ', '')} hp"
            elif hp.lower().startswith("up to"):
                hp = f"{hp} hp" if "hp" not in hp.lower() else hp
            verified_bits.append("hp")
        weight = row["weight_lb"].strip() if row["weight_status"].startswith("VERIFIED") else ""
        if weight and re.fullmatch(r"[\d,]+", weight):
            weight = f"{weight} lb"
        hitch = row["hitch_category"].strip() if row["hitch_category_status"].startswith("VERIFIED") else ""
        if not verified_bits and not weight and not hitch:
            report["dropped"].append(f"attachment {row['brand']} {row['product']}: no verified field")
            continue
        url, title, _date = parse_source(row["source"])
        if not url:
            report["dropped"].append(f"attachment {row['brand']} {row['product']}: no source URL")
            continue
        note = row["notes"]
        if row["kind"] == "box scraper":
            note = (note + " Woods calls this category a box scraper.").strip()
        if not hp:
            note = (note + " Horsepower range was not printed on the page that was read.").strip()
        added_products.append({
            "maker": row["brand"],
            "type": kind_type[row["kind"]],
            "model": row["product"],
            "width": width,
            "hp_range": hp,
            "hp_basis": "published tractor horsepower range" if hp else "",
            "hitch": hitch,
            "weight": weight,
            "pto_speed": "",
            "source_url": url,
            "status": "VERIFIED",
            "notes": note,
        })
        report["created"].append(f"attachment {row['brand']} {row['product']}")
    write_csv(DATA / "attachments.csv", att_header, old_att + added_products)

    # Maintenance
    maint = read_csv(DATA / "maintenance.csv")
    maint_header = list(maint[0].keys())

    def find_maint(brand, model, label):
        for item in maint:
            if item["brand"] == brand and item["model"] == model and item["label"] == label:
                return item
        return None

    # Known capacity disagreements on T264
    crank = find_maint("TYM", "T264", "Crankcase")
    if crank:
        crank["value"] = "2024 brochure: 4.5 qt (4.3 L). Operator manual: 1.14 US gal."
        crank["detail"] = "The two TYM documents do not print the same crankcase quantity. Both are quoted. They are not averaged."
        crank["status"] = "CONFLICT"
        report["conflicts"].append("TYM T264 crankcase 4.5 qt (4.3 L) vs 1.14 US gal")
    trans = find_maint("TYM", "T264", "Transmission and hydraulics")
    if trans:
        trans["value"] = "2024 brochure: 4.7 gal (17.8 L). Operator manual: transmission case 5.81 US gal."
        trans["detail"] = "The brochure and the operator manual do not print the same transmission quantity. Both are quoted."
        trans["status"] = "CONFLICT"
        report["conflicts"].append("TYM T264 transmission 4.7 gal (17.8 L) vs 5.81 US gal")

    for row in fluid_rows:
        # Skip a second fuel line when an existing fuel row already agrees.
        if row["label"] == "Fluids" and "fuel" in row["value"].lower():
            existing_fuel = [item for item in maint if item["brand"] == row["brand"] and item["model"] == row["model"] and "fuel" in item["label"].lower()]
            if existing_fuel and agrees(existing_fuel[0]["value"], row["value"]):
                if row["source_url"] not in existing_fuel[0]["detail"]:
                    existing_fuel[0]["detail"] = (existing_fuel[0]["detail"] + f" Also printed as {row['value']} in {row['source_title']}.").strip()
                report["agreed"].append(f"fluid {row['brand']} {row['model']}")
                continue
        maint.append(row)

    def map_filter(brand, model):
        name = model[len(brand) + 1:] if model.startswith(brand + " ") else model
        brand = "Kioti" if brand.upper() == "KIOTI" else brand
        aliases = {"B2601": "B2601HSD"}
        if brand == "Branson":
            return "TYM", aliases.get(name, name)
        return brand, aliases.get(name, name)

    model_names = {(row["brand"], row["model"]) for row in old_rows + new_rows}
    for row in read_csv(GAP / "filters.csv"):
        brand, model = map_filter(row["brand"], row["model"])
        if (brand, model) not in model_names:
            report["dropped"].append(f"filter {row['brand']} {row['model']} {row['component']}: no single tractor page for that name")
            continue
        url, title, _date = parse_source(row["source"])
        if not url:
            report["dropped"].append(f"filter {brand} {model} {row['component']}: no source URL")
            continue
        added = False
        if row["part_number_status"].startswith("VERIFIED") and row["part_number"].strip():
            maint.append({
                "brand": brand, "model": model, "label": row["component"],
                "value": row["part_number"].strip(),
                "detail": row["notes"],
                "status": "VERIFIED", "source_title": title, "source_url": url, "checked": CHECKED,
            })
            added = True
        if row["fluid_spec_status"].startswith("VERIFIED") and row["fluid_spec"].strip():
            maint.append({
                "brand": brand, "model": model, "label": f"{row['component']} spec",
                "value": row["fluid_spec"].strip(), "detail": "",
                "status": "VERIFIED", "source_title": title, "source_url": url, "checked": CHECKED,
            })
            added = True
        if row["capacity_status"].startswith("VERIFIED") and row["capacity"].strip():
            # T264 capacities are already represented as conflicts above
            if not (brand == "TYM" and model == "T264"):
                maint.append({
                    "brand": brand, "model": model, "label": f"{row['component']} capacity",
                    "value": row["capacity"].strip(), "detail": row["notes"],
                    "status": "VERIFIED", "source_title": title, "source_url": url, "checked": CHECKED,
                })
                added = True
        if added:
            report["created"].append(f"maintenance {brand} {model} {row['component']}")
        else:
            report["dropped"].append(f"filter {brand} {model} {row['component']}: part number, spec, and capacity are unverified")

    write_csv(DATA / "maintenance.csv", maint_header, maint)

    # Comparisons for new variant pairs
    comps = read_csv(DATA / "comparisons.csv")
    comp_header = list(comps[0].keys())
    have = {row["slug"] for row in comps}

    def add_comp(slug, title, left, right, note):
        if slug in have:
            return
        comps.append({
            "slug": slug, "title": title, "kind": "pair",
            "model_a": left, "model_b": right, "model_c": "", "note": note,
        })
        have.add(slug)
        report["created"].append(f"comparison {slug}")

    by_series = defaultdict(list)
    for row in new_rows:
        by_series[(row["brand"], row["series"])].append(row["model"])
    for (brand, series), names in by_series.items():
        name_set = set(names)
        for name in names:
            for tail, other, label in (
                (" gear", " HST", "HST"),
                (" gear", " servo HST", "servo HST"),
                (" gear", " shuttle", "shuttle"),
                (" HST", " shuttle", "shuttle"),
                (" 2WD gear", " 4WD gear", "4WD"),
            ):
                if name.endswith(tail) and (name[: -len(tail)] + other) in name_set:
                    base = name[: -len(tail)]
                    partner = base + other
                    slug = re.sub(r"[^a-z0-9]+", "-", f"{name}-vs-{partner}".lower()).strip("-")
                    add_comp(
                        slug,
                        f"{brand} {name} and {partner}",
                        f"{brand}|{name}",
                        f"{brand}|{partner}",
                        f"Both columns are from the {series} documents read on {CHECKED}. The figures are not averaged.",
                    )
    write_csv(DATA / "comparisons.csv", comp_header, comps)

    print("CREATED", len(report["created"]))
    print("MERGED", len(report["merged"]))
    print("CONFLICTS", len(report["conflicts"]))
    print("DROPPED", len(report["dropped"]))
    print("--- conflicts ---")
    for line in report["conflicts"]:
        print(line)
    print("--- dropped ---")
    for line in report["dropped"]:
        print(line)
    print("--- created sample ---")
    for line in report["created"]:
        if line.startswith("comparison") or line.startswith("attachment") or not line.startswith("maintenance"):
            print(line)


if __name__ == "__main__":
    main()
