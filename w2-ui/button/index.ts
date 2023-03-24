import type { App } from 'vue'
import Button from './src/button'

// Button.install = (app: App): void => {
//   app.component(Button.name, Button)
// }

export { Button }

export default {
	title: 'Button 按钮',
	category: 'Basic 基础组件',
	status: '0%',
	install(app: App): void {
		// Vue.use 方法注册对象必须包含install方法
		// app.use(Button as any)

		// 上面Vue.use + install和下面效果一致
		app.component(Button.name, Button)
	},
}
