import { useNamespace } from '@lnnlmario/hooks'
import { capitalize } from '@lnnlmario/utils'
import { computed, defineComponent, defineAsyncComponent } from 'vue'
import type { CSSProperties } from 'vue'

import { iconProps, IconProps } from './iconTypes'

import './icon.scss'

export default defineComponent({
	name: 'W2Icon',
	props: iconProps,
	setup(props: IconProps, ctx) {
		const ns = useNamespace('icon')
		// 动态导入图标组件
		const AsyncSvg = computed(() => {
      if (props.type) {
        return defineAsyncComponent(async () => {
          const icons = await import('@lnnlmario/icons')
          return icons[capitalize(props.type)] || ''
        })
      }
      return ''
		})

		const style = computed(() => {
			const { size, color } = props
			const style: CSSProperties = {}
			if (size) {
				style.fontSize = `${size}px`
			}
			if (color) {
				// 定义css变量
				style['--color'] = color
			}
			return style
		})

		return () => {
			return (
				<i class={ns.b()} style={style.value}>
					{ctx.slots.default?.() || <AsyncSvg.value />}
				</i>
			)
		}
	},
})
