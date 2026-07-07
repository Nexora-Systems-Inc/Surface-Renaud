export function getIntakeClientConfig() {
  const baseUrl = process.env.NEXT_PUBLIC_NEXORA_INTAKE_URL;
  const siteSlug = process.env.NEXT_PUBLIC_NEXORA_SITE_SLUG;
  const sitePublicKey = process.env.NEXT_PUBLIC_NEXORA_SITE_KEY;

  if (!baseUrl || !siteSlug || !sitePublicKey) {
    throw new Error(
      "Missing Nexora intake configuration. Set NEXT_PUBLIC_NEXORA_INTAKE_URL, NEXT_PUBLIC_NEXORA_SITE_SLUG, and NEXT_PUBLIC_NEXORA_SITE_KEY.",
    );
  }

  return {
    baseUrl,
    siteSlug,
    sitePublicKey,
  };
}
