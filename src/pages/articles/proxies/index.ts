import { fetchViaCorsProxy } from "./corsproxy";
import { fetchViaWhateverOrigin } from "./whateverorigin";

const PROXIES = [fetchViaCorsProxy, fetchViaWhateverOrigin];

export async function fetchThroughProxies(
  url: string,
  timeout: number
): Promise<string> {
  let lastError: Error | null = null;

  for (const proxyFetch of PROXIES) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      return await proxyFetch(url, controller.signal);
    } catch (error) {
      lastError = error instanceof Error ? error : new Error("Proxy failed");
      console.warn(`Proxy failed: ${lastError.message}, trying next...`);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  throw lastError || new Error("All proxies failed");
}
