import type { App } from 'vue'
import Backtop from './src/backtop'

export { Backtop }

export default {
	title: 'Backtop 回到顶部',
	category: 'Navigation 导航',
	status: '90%', // TODO: 后续加个显示/消失的动画
	install(app: App): void {
		app.component(Backtop.name, Backtop)
	},
}
