import DefaultTheme from 'vitepress/theme'

import { useBlockDemo } from '../plugins/blockDemo'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'


// import { Button } from 'w2-ui/button'

import Badge from 'w2-ui/badge'
// import { Tree } from 'w2-ui/tree'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		useBlockDemo(app)

		// app.component('w2-button', Button)

		app.use(Badge)
		// app.component('w2-Badge', Badge)
		// app.component('w2-tree', Tree)
	},
}
