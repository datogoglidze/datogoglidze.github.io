export async function fetchViaCorsProxy(
  url: string,
  signal: AbortSignal
): Promise<string> {
  const apiKey = import.meta.env.VITE_CORSPROXY_API_KEY;
  const keyParam = apiKey ? `key=${encodeURIComponent(apiKey)}&` : "";
  const proxyUrl = `https://corsproxy.io/?${keyParam}url=${encodeURIComponent(url)}`;
  const response = await fetch(proxyUrl, { signal });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.text();
}
