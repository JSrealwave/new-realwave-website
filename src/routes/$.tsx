import { createFileRoute } from "@tanstack/react-router";

/** Catch-all so unknown URLs hit the root redirect instead of a not-found page. */
export const Route = createFileRoute("/$")({
  component: () => null,
});
