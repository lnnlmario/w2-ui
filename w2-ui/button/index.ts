import type { App } from 'vue'
import Button from './src/button'

Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export { Button }

export default {
  title: 'Button 按钮',
  category: 'Basic 基础组件',
  status: '0%',
  install(app: App): void {
    app.use(Button as any)
  }
}