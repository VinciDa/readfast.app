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
const ANDROID_PACKAGE = "read.fast.app";

/**
 * Google Play only attributes installs to a UTM campaign when the tags are
 * packed into a single `referrer` query param (not passed as top-level
 * params). See: https://play.google.com/console/about/brand-and-marketing/linking-google-play/
 */
function buildAndroidStoreUrl(utmContent: string): string {
  const referrer = new URLSearchParams({
    utm_source: "website",
    utm_medium: "landing_page",
    utm_campaign: "readfast_launch",
    utm_content: utmContent,
  });
  const params = new URLSearchParams({
    id: ANDROID_PACKAGE,
    referrer: referrer.toString(),
  });
  return `https://play.google.com/store/apps/details?${params.toString()}`;
}

export function getStoreUrl(
  store: "ios" | "android",
  utmContent: string,
): string {
  if (store === "android") return buildAndroidStoreUrl(utmContent);
  return `${IOS_URL}&utm_source=website&utm_medium=landing_page&utm_campaign=readfast_launch&utm_content=${utmContent}`;
}

export function getORPIndex(word: string): number {
  const len = word.length;
  if (len <= 1) return 0;
  if (len <= 5) return 1;
  if (len <= 9) return 2;
  if (len <= 13) return 3;
  return 4;
}
