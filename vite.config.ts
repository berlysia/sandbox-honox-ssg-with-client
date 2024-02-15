import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";
import devServer from "@hono/vite-dev-server";

const entry = "app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    // Client build
    return {
      plugins: [client()],
      build: {
        outDir: ".hono",
        emptyOutDir: true,
      },
    };
  }

  {
    // SSG build
    return {
      plugins: [
        honox(),
        devServer({ entry }),
        ssg({ entry }),
      ],
    };
  }
});
