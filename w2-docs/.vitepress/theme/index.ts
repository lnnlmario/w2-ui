import DefaultTheme from "vitepress/theme";

import { registerDemoBlock } from "../plugins/demoBlock";
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import Tree from "../../../w2-ui/tree";
import Button from "../../../w2-ui/button";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    registerDemoBlock(app);

    app.use(Tree);
    app.use(Button);
  },
};
