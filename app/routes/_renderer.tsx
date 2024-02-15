import { Style } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
import { Manifest } from "vite";

const manifestFile = Object.values(
  import.meta.glob<{ default: Manifest }>("/.hono/.vite/manifest.json", {
    eager: true,
  }),
)[0];
const manifest = manifestFile.default;

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" manifest={manifest}/>
        <Style />
      </head>
      <body>{children}</body>
    </html>
  )
})
