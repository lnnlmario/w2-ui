import { PropType, ExtractPropTypes } from 'vue'

export type BadgeType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export const badgeProps = {
	type: {
		// 提供一个比`String`更具体得类型
		type: String as PropType<BadgeType>,
		default: 'danger',
	},
	// 显示值
	value: {
		type: [String, Number],
	},
	// 最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用。
	max: {
		type: Number,
		default: 99,
	},
	// 是否显示小圆点。
	isDot: {
		type: Boolean,
		default: false,
	},
	// 当数值为 0 时，是否展示 Badge
	showZero: {
		type: Boolean,
		default: false,
	},
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
