const BASE_URL = "https://datogoglidze.github.io";
const SITE_NAME = "Schwifter";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

export function SEOHead({ title, description, path = "/" }: SEOHeadProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const normalizedPath = path.endsWith("/") ? path.slice(0, -1) : path;
  const canonicalUrl = `${BASE_URL}${normalizedPath}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}
