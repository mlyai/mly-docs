import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "茉莉云",
      description: "茉莉云文档中心",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
