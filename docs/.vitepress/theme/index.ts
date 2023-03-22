import DefaultTheme from 'vitepress/theme'

import { useBlockDemo } from '../plugins/blockDemo'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

import { Tree } from '../../../w2-ui/tree'
import { Button } from '../../../w2-ui/button'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		useBlockDemo(app)

		app.component('w2-tree', Tree)
		app.component('w2-button', Button)
	},
}
