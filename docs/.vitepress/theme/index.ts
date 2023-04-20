import DefaultTheme from 'vitepress/theme'

import { useBlockDemo } from '../plugins/blockDemo'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import { Reading, Aim } from '@lnnlmario/icons'

// Basic 基础组件
import Icon from '@w2ui/components/icon'
import Button from '@w2ui/components/button'

// Data 数据展示
import Badge from '@w2ui/components/badge'
import Tree from '@w2ui/components/tree'

// Navigation 导航
import Backtop from '@w2ui/components/backtop'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		useBlockDemo(app)

		// 注册图标组件，给icon组件测试用
		app.component('W2IconAim', Aim)
		app.component('W2IconReading', Reading)

		app.use(Icon)
		app.use(Tree)
		app.use(Badge)
		app.use(Button)
		app.use(Backtop)
	},
}
