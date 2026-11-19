/**
 * Public-site hold: only `/` and the scene image are documents or files a
 * visitor may load. Dev and preview servers use this before Vite's static
 * middleware. Production static files are redirected in vercel.json.
 */

export const SCENE_IMAGE_PATH = "/Realtime persistent scene agents.png";

const ALLOW_PREFIXES = [
  "/@",
  "/src/",
  "/node_modules/",
  "/.vite/",
  "/__vite",
  "/__grok",
  "/_build",
  "/_server",
  "/_tanstack",
  "/__nitro",
];

/**
 * @param {string | undefined} rawUrl
 * @returns {string | null} Redirect location, or null when the request may continue.
 */
export function holdRedirectTarget(rawUrl) {
  const pathOnly = String(rawUrl ?? "/").split("?", 1)[0] || "/";
  if (pathOnly === "/") return null;

  let decoded = pathOnly;
  try {
    decoded = decodeURIComponent(pathOnly);
  } catch {
    decoded = pathOnly;
  }

  if (decoded === SCENE_IMAGE_PATH) return null;
  if (decoded === "/assets/logo-wordmark.png") return "/";
  if (pathOnly.startsWith("/assets/") || decoded.startsWith("/assets/"))
    return null;
  if (
    ALLOW_PREFIXES.some(
      (prefix) => pathOnly.startsWith(prefix) || decoded.startsWith(prefix),
    )
  ) {
    return null;
  }
  return "/";
}
