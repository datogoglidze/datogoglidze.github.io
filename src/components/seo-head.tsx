const BASE_URL = "https://datogoglidze.github.io";
const SITE_NAME = "Schwifter";
const AUTHOR_NAME = "David Goglidze";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

export function SEOHead({ title, description, path = "/" }: SEOHeadProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const normalizedPath =
    path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  const canonicalUrl = `${BASE_URL}${normalizedPath}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={AUTHOR_NAME} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={AUTHOR_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
}
