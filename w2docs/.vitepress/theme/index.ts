import DefaultTheme from "vitepress/theme";

import Tree from "../../../w2ui/tree";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Tree);
  },
};
