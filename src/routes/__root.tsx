import {
  createRootRoute,
  HeadContent,
  redirect,
  Scripts,
} from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { AuthProvider } from "@/lib/auth/provider";
import appCss from "../styles.css?url";

const SCENE_IMAGE = "/Realtime persistent scene agents.png";

export const Route = createRootRoute({
  beforeLoad: ({ location }) => {
    if (location.pathname !== "/") {
      throw redirect({ to: "/", replace: true });
    }
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Realwave" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html
      lang="en"
      style={{ background: "#000", height: "100%" }}
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body
        style={{
          margin: 0,
          background: "#000",
          height: "100dvh",
          overflow: "hidden",
        }}
      >
        <PreviewHostBridge />
        <AuthProvider>
          {/* Legacy route modules stay in the repo. They are not rendered. */}
          <Scene />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function Scene() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100dvh",
        margin: 0,
        background: "#000",
        overflow: "hidden",
      }}
    >
      <img
        src={SCENE_IMAGE}
        alt="Realtime persistent scene agents"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </main>
  );
}
