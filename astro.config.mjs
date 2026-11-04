import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://jasonmiazga.com",
  // Keep the old Gatsby folder: it holds /agent/ and /agent/privacy/,
  // which Google's sign-in screen links to.
  publicDir: "./static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
})
