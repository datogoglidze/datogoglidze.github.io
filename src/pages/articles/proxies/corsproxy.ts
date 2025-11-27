export async function fetchViaCorsProxy(
  url: string,
  signal: AbortSignal
): Promise<string> {
  const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(url)}`;
  const response = await fetch(proxyUrl, { signal });

  if (!response.ok) {
    throw new Error(`CorsProxy failed: ${response.status}`);
  }

  return response.text();
}
