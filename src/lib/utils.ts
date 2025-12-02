import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toUpper(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export const sendEventToGoogle = (
  action: string,
  params: Record<string, unknown>
) => {
  const win = window as unknown as {
    gtag?: (
      command: string,
      action: string,
      params: Record<string, unknown>
    ) => void;
  };
  if (typeof win !== "undefined" && win.gtag) {
    win.gtag("event", action, params);
  }
};
