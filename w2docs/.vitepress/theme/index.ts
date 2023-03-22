import DefaultTheme from "vitepress/theme";

import Tree from "../../../w2ui/tree";
import Button from "../../../w2ui/button";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Tree);
    app.use(Button);
  },
};
