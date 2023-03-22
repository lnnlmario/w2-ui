import { defineConfig } from "vitepress";

const config = defineConfig({
  lang: 'zh-CN',
  title: 'vitepress',
  themeConfig: {
    sidebar: sidebar(),
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
        ],
      },
      {
        text: "Form 表单组件",
      },
      {
        text: "Data 数据展示",
      },
      {
        text: "Navigation 导航",
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
