import DefaultTheme from "vitepress/theme";

import Tree from "../../../w2-ui/tree";
import Button from "../../../w2-ui/button";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Tree);
    app.use(Button);
  },
};
