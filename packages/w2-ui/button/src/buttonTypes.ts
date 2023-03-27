import { PropType, ExtractPropTypes } from 'vue'

export type IButtonSize = 'large'| 'default'| 'small'

export type IButtonType = 'Default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default',
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'default',
  },
  // 是否是链接按钮
  link: {
    type: Boolean,
    default: false
  },
  // 是否是圆角按钮
  round: {
    type: Boolean,
    default: false
  },
  // 是否是原形按钮
  circle: {
    type: Boolean,
    default: false
  },
  // 是否为加载中状态
  loading: {
    type: Boolean,
    default: false
  },
  // 自定义按钮图标
  icon: {
    type: String,
    default: ''
  },
  // 按钮是否为禁用状态
  disabled: {
    type: Boolean,
    default: false
  }
}

export type IButtonProps = ExtractPropTypes<typeof buttonProps>