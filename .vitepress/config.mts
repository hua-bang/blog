import { defineConfig } from "vitepress";
import SideBarConfig from "./sidebar.config.json";
import AutoSideBar from "./plugins/auto-side-bar";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "华铧's Blog",
  description: "Inspire Creativity, Enrich Life.",
  base: process.env.BASE ?? "/blog/",
  srcDir: "docs",
  themeConfig: {
    logo: {
      src: "https://avatars.githubusercontent.com/u/47221942?v=4",
      style: {
        borderRadius: "50%",
      },
    },
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "🧑🏻‍💻 Tech",
        link: "/tech/",
      },
      {
        text: "✍🏼 Blog",
        link: "/blog/",
      },
      {
        text: "📖 Read",
        link: "/read/",
      },
      {
        text: "👋🏻 Life",
        link: "/life/",
      },
      {
        text: "⭐️ Me",
        link: "/me/",
      },
    ],
    sidebar: SideBarConfig,
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hua-bang" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present 华铧.",
    },
  },
  vite: {
    plugins: [
      AutoSideBar({
        docsDir: path.resolve(__dirname, "../docs"),
        rootPath: path.resolve(__dirname, "../"),
        configFilePath: path.resolve(__dirname, "./sidebar.config.json"),
      }),
    ],
  },
});
