import DefaultTheme from 'vitepress/theme'

import { useBlockDemo } from '../plugins/blockDemo'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

// Basic 基础组件
import Icon from 'w2-ui/icon'
import Button from 'w2-ui/button'

// Data 数据展示
import Badge from 'w2-ui/badge'
import Tree from 'w2-ui/tree'

// Navigation 导航
import Backtop from 'w2-ui/backtop'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		useBlockDemo(app)

		app.use(Icon)
		app.use(Tree)
		app.use(Badge)
		app.use(Button)
		app.use(Backtop)
	},
}
