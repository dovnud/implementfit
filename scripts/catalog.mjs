import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "csv-parse/sync";

const root = process.cwd();
const dataDir = join(root, "research", "data");

const SPEC_FIELDS = [
  ["engine_hp", "engine_status", "engine_unit_note", "Engine power"],
  ["pto_hp", "pto_status", "pto_note", "PTO horsepower"],
  ["hitch", "hitch_status", "", "Hitch"],
  ["rear_lift_lb", "rear_lift_status", "rear_lift_point", "Rear lift"],
  ["loader_lift_lb", "loader_status", "loader_lift_point", "Loader lift"],
  ["weight_lb", "weight_status", "", "Weight"],
  ["transmission", "transmission_status", "", "Transmission"],
  ["tires", "tires_status", "", "Tires"],
];

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function isVerified(status) {
  return String(status || "").trim().startsWith("VERIFIED");
}

export function isConflictStatus(status) {
  return /conflict/i.test(String(status || "")) && !isVerified(status);
}

function readCsv(name) {
  const raw = readFileSync(join(dataDir, name), "utf8");
  return parse(raw, { columns: true, skip_empty_lines: true, relax_quotes: true });
}

function sourceTitle(url) {
  try {
    const path = decodeURIComponent(new URL(url).pathname.split("/").pop() || "");
    const cleaned = path.replace(/\.pdf$/i, "").replace(/[-_]+/g, " ").trim();
    return cleaned || new URL(url).hostname;
  } catch {
    return "Source document";
  }
}

function isSingleModel(model) {
  const name = String(model || "");
  if (!name || name.includes(",") || name.length > 48) return false;
  if (/other than|not in|through|models/i.test(name)) return false;
  return true;
}

const SOURCE_KEYS = {
  engine_hp: "engine_source",
  pto_hp: "pto_source",
  hitch: "hitch_source",
  rear_lift_lb: "rear_lift_source",
  loader_lift_lb: "loader_source",
  loader_model: "loader_source",
  weight_lb: "weight_source",
  transmission: "transmission_source",
  tires: "tires_source",
};

function attachSource(field, row) {
  const raw = String(row[SOURCE_KEYS[field.key]] || "");
  const parts = raw.split("||").map((part) => part.trim()).filter(Boolean);
  const first = (parts[0] || "").split("|").map((part) => part.trim());
  if (first[0] && first[0].startsWith("http")) {
    field.sourceUrl = first[0];
    field.sourceTitle = first[1] || sourceTitle(first[0]);
    field.checked = first[2] || row.checked || "";
  } else {
    field.sourceUrl = row.source_url;
    field.sourceTitle = sourceTitle(row.source_url);
    field.checked = row.checked || "";
  }
  if (parts.length > 1) {
    const extra = parts.slice(1).map((part) => part.split("|")[1] || part.split("|")[0]).join("; ");
    field.note = [field.note, `Also cited: ${extra}.`].filter(Boolean).join(" ");
  }
  return field;
}

function fieldList(row) {
  const fields = [];
  for (const [valueKey, statusKey, noteKey, label] of SPEC_FIELDS) {
    const status = row[statusKey] || "";
    const value = (row[valueKey] || "").trim();
    if (!value) continue;
    if (isVerified(status)) {
      fields.push(attachSource({
        key: valueKey,
        label,
        value,
        note: noteKey ? (row[noteKey] || "").trim() : "",
        status,
        conflict: /conflict|disagree/i.test(`${status} ${value} ${row[noteKey] || ""}`),
      }, row));
    } else if (isConflictStatus(status)) {
      fields.push(attachSource({
        key: valueKey,
        label,
        value,
        note: "Both quoted values are printed in the sources. They are not averaged.",
        status,
        conflict: true,
      }, row));
    }
  }
  if ((row.loader_model || "").trim() && (isVerified(row.loader_status || "") || isConflictStatus(row.loader_status || ""))) {
    fields.push(attachSource({
      key: "loader_model",
      label: "Loader model",
      value: row.loader_model.trim(),
      note: "",
      status: row.loader_status,
      conflict: false,
    }, row));
  }
  return fields;
}

function buildNote(model, siblings) {
  const byKey = Object.fromEntries(model.fields.map((field) => [field.key, field]));
  const sentences = [];
  sentences.push(
    `${model.brand} ${model.name} is the ${model.series} column published under that exact model code. Only cells marked verified are shown, and each one keeps the wording of its source.`,
  );
  const pto = byKey.pto_hp;
  if (pto) {
    sentences.push(`The PTO horsepower cell reads: ${pto.value}.`);
    if (pto.note) sentences.push(pto.note);
    if (pto.conflict) {
      sentences.push("Where the documents disagree, both figures stay on the page. They are not averaged.");
    }
  }
  const engine = byKey.engine_hp;
  if (engine) {
    sentences.push(`Engine power is printed as ${engine.value}.`);
    if (engine.note) sentences.push(engine.note);
  }
  const hitch = byKey.hitch;
  if (hitch) {
    if (/limited/i.test(hitch.value)) {
      sentences.push(
        `The hitch is printed as “${hitch.value}.” That phrase is not rewritten as Category 1.`,
      );
    } else {
      sentences.push(`The hitch cell is printed as “${hitch.value}.”`);
    }
  }
  const lift = byKey.rear_lift_lb;
  if (lift) {
    sentences.push(
      lift.conflict
        ? `Rear lift is not reduced to one number. The source says: ${lift.value}.`
        : `Rear lift is ${lift.value}. Measurement point: ${lift.note || "not stated on the stored row"}.`,
    );
  }
  const loader = byKey.loader_lift_lb;
  if (loader && !loader.conflict) {
    sentences.push(
      `Loader lift is ${loader.value}, measured ${loader.note || "at the point named on the sheet"}.`,
    );
  }
  if (byKey.loader_model) {
    sentences.push(`The loader named on the row is ${byKey.loader_model.value}.`);
  }
  if (byKey.weight_lb) sentences.push(`Weight on the source row: ${byKey.weight_lb.value}.`);
  if (byKey.transmission) sentences.push(`Transmission as printed: ${byKey.transmission.value}.`);
  if (byKey.tires) sentences.push(`Tires as printed: ${byKey.tires.value}.`);
  if (/dealer-hosted/i.test(model.rowNote)) {
    sentences.push(
      "This row comes from dealer-hosted John Deere literature, so the source line says that instead of a deere.com file.",
    );
  }
  if (/under the 15/i.test(pto?.note || "")) {
    sentences.push(
      "The PTO figure is under 15 horsepower. Several cutter sheets in this catalog start their published range at 18 or 20.",
    );
  }
  const samePto = siblings.filter((other) => {
    const mine = byKey.pto_hp?.value;
    const theirs = other.fields.find((field) => field.key === "pto_hp")?.value;
    return mine && theirs === mine;
  });
  if (samePto.length) {
    sentences.push(
      `On this document, ${samePto.map((other) => other.name).join(" and ")} print the same PTO horsepower. This page stays on ${model.name} so the columns are not merged.`,
    );
  }
  sentences.push(`Checked ${model.checked}. Document: ${model.sourceTitle}.`);
  return sentences.join(" ");
}

function loadMaintenance(models) {
  let rows = [];
  try {
    rows = readCsv("maintenance.csv");
  } catch {
    rows = [];
  }
  const byModel = new Map();
  for (const row of rows) {
    const publishable = isVerified(row.status) || isConflictStatus(row.status);
    if (!publishable || !(row.value || "").trim() || !(row.source_url || "").startsWith("http")) {
      continue;
    }
    const key = `${slugify(row.brand)}/${slugify(row.model)}`;
    if (!models.has(key)) continue;
    const item = {
      label: row.label,
      value: row.value,
      detail: row.detail || "",
      status: row.status,
      conflict: /conflict|disagree/i.test(`${row.status} ${row.detail || ""}`),
      sourceUrl: row.source_url,
      sourceTitle: row.source_title || sourceTitle(row.source_url),
      checked: row.checked || models.get(key).checked,
    };
    if (!byModel.has(key)) byModel.set(key, []);
    byModel.get(key).push(item);
  }
  return byModel;
}

function loadComparisons(modelByKey) {
  let rows = [];
  try {
    rows = readCsv("comparisons.csv");
  } catch {
    rows = [];
  }
  const pages = [];
  for (const row of rows) {
    const keys = [row.model_a, row.model_b, row.model_c]
      .map((value) => (value || "").trim())
      .filter(Boolean)
      .map((value) => {
        const [brand, ...rest] = value.split("|");
        return `${slugify(brand)}/${slugify(rest.join("|"))}`;
      });
    const models = keys.map((key) => modelByKey.get(key)).filter(Boolean);
    if (models.length !== keys.length || models.length < 1) continue;
    const verified = models.every((model) => model.fields.some((field) => field.key === "pto_hp" || field.key === "hitch" || field.key === "engine_hp"));
    if (!verified) continue;
    pages.push({
      slug: row.slug,
      title: row.title,
      kind: row.kind || "pair",
      models,
      note: row.note || "",
    });
  }
  return pages;
}

let cache;
export function loadCatalog() {
  if (cache) return cache;
  const modelRows = readCsv("models.csv");
  const models = [];
  for (const row of modelRows) {
    if (!isSingleModel(row.model)) continue;
    if (!(row.source_url || "").startsWith("http")) continue;
    const fields = fieldList(row);
    if (!fields.length) continue;
    const model = {
      brand: row.brand,
      brandSlug: slugify(row.brand),
      name: row.model,
      slug: slugify(row.model),
      series: row.series || "",
      fields,
      sourceUrl: row.source_url,
      sourceTitle: sourceTitle(row.source_url),
      checked: row.checked || "",
      rowNote: row.notes || "",
    };
    model.path = `/tractors/${model.brandSlug}/${model.slug}/`;
    models.push(model);
  }
  for (const model of models) {
    const siblings = models.filter(
      (other) => other !== model && other.brand === model.brand && other.series === model.series,
    );
    model.note = buildNote(model, siblings);
  }

  const modelByKey = new Map(models.map((model) => [`${model.brandSlug}/${model.slug}`, model]));
  const maintenance = loadMaintenance(modelByKey);
  for (const model of models) {
    const items = maintenance.get(`${model.brandSlug}/${model.slug}`) || [];
    model.maintenance = items;
    model.maintenancePath = items.length ? `${model.path}maintenance/` : "";
  }

  const products = [];
  for (const row of readCsv("attachments.csv")) {
    if (!isVerified(row.status)) continue;
    if (!(row.source_url || "").startsWith("http")) continue;
    const typeSlug = slugify(row.type);
    const product = {
      maker: row.maker,
      type: row.type,
      typeSlug,
      name: row.model,
      slug: slugify(`${row.maker} ${row.model}`),
      width: row.width || "",
      hpRange: row.hp_range || "",
      hpBasis: row.hp_basis || "",
      hitch: row.hitch || "",
      weight: row.weight && !/^not opened$/i.test(row.weight) ? row.weight : "",
      ptoSpeed: row.pto_speed && !/^not opened$/i.test(row.pto_speed) ? row.pto_speed : "",
      sourceUrl: row.source_url,
      sourceTitle: sourceTitle(row.source_url),
      checked: "2026-11-14",
      status: row.status,
      notes: row.notes || "",
    };
    product.path = `/attachments/${typeSlug}/${product.slug}/`;
    products.push(product);
  }

  const brands = [];
  for (const model of models) {
    let brand = brands.find((item) => item.slug === model.brandSlug);
    if (!brand) {
      brand = { name: model.brand, slug: model.brandSlug, path: `/brands/${model.brandSlug}/`, models: [] };
      brands.push(brand);
    }
    brand.models.push(model);
  }
  brands.sort((a, b) => a.name.localeCompare(b.name));

  const comparisons = loadComparisons(modelByKey).map((page) => ({
    ...page,
    path: `/compare/${page.slug}/`,
  }));

  const types = [];
  const typeNames = [...new Set(products.map((product) => product.type))];
  for (const type of typeNames) {
    const slug = slugify(type);
    types.push({
      name: type,
      slug,
      path: `/attachments/${slug}/`,
      products: products.filter((product) => product.typeSlug === slug),
    });
  }

  cache = { models, brands, products, types, comparisons, modelByKey };
  return cache;
}

export function resetCatalogCache() {
  cache = undefined;
}
