export type Platform = "ios" | "android" | "both";

export function getPlatform(): Platform {
  if (typeof navigator === "undefined") return "both";
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod|mac/i.test(ua)) return "ios";
  return "both";
}

/** Apple campaign link (pt/ct/mt) — used for all iOS CTAs */
const IOS_URL =
  "https://apps.apple.com/app/apple-store/id6754703001?pt=127049414&ct=readfast_website&mt=8";
const ANDROID_URL =
  "https://play.google.com/store/apps/details?id=read.fast.app";

export function getStoreUrl(
  store: "ios" | "android",
  utmContent: string,
): string {
  const base = store === "ios" ? IOS_URL : ANDROID_URL;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}utm_source=website&utm_medium=landing_page&utm_campaign=readfast_launch&utm_content=${utmContent}`;
}

export function getORPIndex(word: string): number {
  const len = word.length;
  if (len <= 1) return 0;
  if (len <= 5) return 1;
  if (len <= 9) return 2;
  if (len <= 13) return 3;
  return 4;
}
