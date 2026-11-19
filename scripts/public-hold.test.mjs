import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { holdRedirectTarget } from "./public-hold.mjs";

describe("holdRedirectTarget", () => {
  it("serves the home page and the scene image", () => {
    assert.equal(holdRedirectTarget("/"), null);
    assert.equal(holdRedirectTarget("/?install=1"), null);
    assert.equal(
      holdRedirectTarget("/Realtime%20persistent%20scene%20agents.png"),
      null,
    );
  });

  it("redirects pages, unknown paths, and other public files", () => {
    for (const path of [
      "/solutions",
      "/solutions/",
      "/solutions?market=retail",
      "/solutions/flow",
      "/vue",
      "/contact",
      "/no-such-page",
      "/media/gsoc.jpg",
      "/partners/axis.png",
      "/customers/exxon.png",
      "/og.jpg",
      "/favicon.svg",
      "/assets/logo-wordmark.png",
    ]) {
      assert.equal(holdRedirectTarget(path), "/", path);
    }
  });

  it("leaves the app runtime and platform files alone", () => {
    for (const path of [
      "/assets/index-abc.js",
      "/assets/styles-abc.css",
      "/@vite/client",
      "/src/routes/__root.tsx",
      "/__grok/manifest.webmanifest",
    ]) {
      assert.equal(holdRedirectTarget(path), null, path);
    }
  });
});
