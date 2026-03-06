import { useEffect } from "react";

const BASE_URL = "https://datogoglidze.github.io";
const SITE_NAME = "Schwifter";
const AUTHOR_NAME = "David Goglidze";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

const SEO_ATTR = "data-seo";

function setMeta(attr: string, value: string, content: string) {
  const selector = `meta[${attr}="${value}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    el.setAttribute(SEO_ATTR, "");
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    el.setAttribute(SEO_ATTR, "");
    document.head.appendChild(el);
  }
  el.href = href;
}

export function SEOHead({ title, description, path = "/" }: SEOHeadProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const normalizedPath =
    path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  const canonicalUrl = `${BASE_URL}${normalizedPath}`;

  useEffect(() => {
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("name", "author", AUTHOR_NAME);
    setCanonical(canonicalUrl);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", AUTHOR_NAME);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
  }, [fullTitle, description, canonicalUrl]);

  return null;
}
