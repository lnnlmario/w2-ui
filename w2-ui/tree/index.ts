import type { App } from 'vue'
import Tree from './src/tree'

Tree.install = (app: App): void => {
  app.component(Tree.name, Tree)
}

export { Tree }

export default {
  title: 'Tree 树形控件',
  category: 'Data 数据展示',
  status: '0%',
  install(app: App): void {
    app.use(Tree as any)
  }
}