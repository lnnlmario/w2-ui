import { defineComponent, computed } from 'vue'
import useNamespace from '../../common/composables/useNamespace'
import './badge.scss'

import { badgeProps, BadgeProps } from './badgeTypes'

export default defineComponent({
	name: 'W2Badge',
	props: badgeProps, // 传入props定义
	setup(props: BadgeProps, ctx) {
		const ns = useNamespace('badge')

		const text = computed(() => {
			// 显示点，直接返回空串
			if (props.isDot) {
				return ''
			}

			// 数值类型，并且设置了最大阈值，超过最大阈值，显示最大阈值+号
			if (typeof props.value === 'number' && typeof props.max === 'number') {
				return props.value > props.max ? `${props.max}+` : props.value
			}
			
			return props.value
		})

		const className = computed(() => {
			const base = ns.e('content')

			return [
				base,
				// 根据type值决定样式
				ns.m(props.type),
				// 显示点还是值
				props.isDot ? ns.m('dot') : ns.m('value'),
			].join(' ')
		})

		return () => {
			return (
				<div class={ns.b()}>
					{/* 展示默认插槽中的内容 */}
					{ctx.slots.default?.()}
          {/* 对于ref对象，必须加`.value`取值 */}
          <div class={className.value}>
            { text.value }
          </div>
				</div>
			)
		}
	},
})
