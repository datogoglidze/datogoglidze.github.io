export async function fetchViaCloudflare(
  url: string,
  signal: AbortSignal
): Promise<string> {
  const proxyUrl = `https://rss-proxy.d-goglidze.workers.dev/?url=${encodeURIComponent(url)}`;
  const response = await fetch(proxyUrl, { signal });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.text();
}
