import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "功能简介",
      icon: "wine-bottle",
      link: "/docs/feature.md",
    },
    {
      text: "接口文档",
      icon: "file-word",
      link: "/docs/api.md",
    },
    {
      text: "常见问题",
      icon: "question",
      link: "/docs/faq.md",
    },
  ],
});
