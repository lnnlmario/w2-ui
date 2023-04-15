import { PropType, ExtractPropTypes } from 'vue'

export type iconTypes = 'search' | 'wrong' | 'edit' | 'right' | 'yes' | 'collection' | 'trash' | 'loading' | 'setting' | 'down' | 'left' | 'up'

export const iconProps = {
	// 图表名称
	type: {
		type: String as PropType<iconTypes>,
		default: 'search',
	},
	// 图标尺寸
	size: {
		type: [Number, String] as PropType<number | string>,
		default: 14,
	},
  // 图标颜色
  color: {
    type: String,
    default: '#9c9da0'
  }
} as const // 常量断言
// as const 是ts的语法，告诉ts所断言的值以及该值所有层级的子属性都不可篡改

export type IconProps = ExtractPropTypes<typeof iconProps>
