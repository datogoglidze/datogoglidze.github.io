import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toUpper(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
