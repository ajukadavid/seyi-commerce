
export default defineNuxtConfig({
  app: {
    head: {
      title: "SeyiCommerce | Your No 1 Ecommerce Site",
      htmlAttrs: { lang: "en" },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "SeyiCommerce is an ecommerce site that helps with procuring your favorite items at discount prices.",
        },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width,initial-scale=1.0",
        },
      ],
    },
  },
  // css: ["~/assets/css/main.css"],
  srcDir: "src/",
  alias: {
    "class-validator": "class-validator/cjs/index.js",
  },
  modules: ["@nuxt/ui"],

  pages: true,
  
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
});