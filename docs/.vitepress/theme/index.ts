import DefaultTheme from "vitepress/theme";

import { useComponents } from "./useComponents";
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import Tree from "../../../w2-ui/tree";
import Button from "../../../w2-ui/button";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    useComponents(app);

    app.component(Tree);
    app.component(Button);
  },
};
