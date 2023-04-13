import type { App } from 'vue'
import Icon from './src/icon'

export { Icon }

export default {
	title: 'Icon 图标',
	category: 'Basic 基础组件',
	status: '0%',
	install(app: App): void {
		app.component(Icon.name, Icon)
	},
}
