import { ExtractPropTypes } from 'vue'

export const backtopProps = {
  // 触发滚动的对象, 默认相对于 html
  // target: {
  //   type: String,
  //   required: true,
  // },
  // 滚动高度达到此参数值才出现
  visibilityHeight: {
    type: Number,
    default: 233,
  },
  // 控制其显示位置，距离页面右边距
  right: {
    type: Number,
    default: 40
  },
  // 控制其显示位置，距离页面底部距离
  bottom: {
    type: Number,
    default: 40
  }
}

export type BacktopProps = ExtractPropTypes<typeof backtopProps>