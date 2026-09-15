import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value)
}
