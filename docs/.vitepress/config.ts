import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";

const config = defineConfig({
  lang: "zh-CN",
  title: "vitepress",
  themeConfig: {
    sidebar: sidebar(),
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
});

function sidebar() {
  return {
    "/": [
      {
        text: "快速开始",
        link: "/",
      },
      {
        text: "Basic 基础组件",
        items: [
          {
            text: "Button 按钮",
            link: "/components/button/",
          },
          {
            text: "Icon 图标",
            link: "/components/icon/",
          },
        ],
      },
      {
        text: "Form 表单组件",
      },
      {
        text: "Data 数据展示",
        items: [
          {
            text: "Badge 徽章",
            link: "/components/badge/",
          },
        ],
      },
      {
        text: "Navigation 导航",
        items: [
          {
            text: "Backtop 回到顶部",
            link: "/components/backtop/",
          }
        ]
      },
      {
        text: "Feedback 反馈组件",
      },
      {
        text: "Others 其他",
      },
    ],
  };
}

export default config;
