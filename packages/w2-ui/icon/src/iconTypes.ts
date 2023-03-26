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
		type: Number,
		default: 14,
	},
  // 图标颜色
  color: {
    type: String,
    default: '#9c9da0'
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>
