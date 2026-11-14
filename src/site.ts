/** Single site setting. Change the URL here only. */
export const siteConfig = {
  url: "https://implementfit.com",
  name: "ImplementFit",
  tagline: "Cited specs for US compact and sub-compact tractors",
  contactEmail: "contact@implementfit.com",
  editorialName: "ImplementFit Editors",
  /** Affiliate links stay off until a person turns this on. */
  affiliatesEnabled: false,
  /** Amazon Associates tag. Unused while affiliatesEnabled is false. */
  amazonTag: "domainname-20",
} as const;

/** True only for a preview deploy. Production builds leave this false. */
export function isPreviewBuild() {
  return process.env.PREVIEW === "true";
}
