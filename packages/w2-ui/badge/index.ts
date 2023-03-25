import type { App } from 'vue'
import Badge from './src/badge'

export { Badge }

export default {
	title: 'Badge 徽章',
	category: 'Data 数据展示',
	status: '70%',
	install(app: App): void {
		app.component(Badge.name, Badge)
	},
}
