export async function fetchViaWhateverOrigin(
  url: string,
  signal: AbortSignal
): Promise<string> {
  const proxyUrl = `https://whateverorigin.org/get?url=${encodeURIComponent(url)}`;
  const response = await fetch(proxyUrl, { signal });

  if (!response.ok) {
    throw new Error(`WhateverOrigin failed: ${response.status}`);
  }

  const data = await response.json();

  return data.contents.text();
}
