import { defineComponent, computed } from 'vue'
import useNamespace from '../../common/composables/useNamespace'

import useBacktop from './composables/useBacktop'
import { backtopProps, BacktopProps } from './backtopTypes'
import './backtop.scss'

export default defineComponent({
  name: 'W2Backtop',
  props: backtopProps,
  setup(props: BacktopProps, ctx) {
    const ns = useNamespace('backtop')

    const { visible, handleClick } = useBacktop(props)

    // 默认要显示的内容
    const defaultCpn = () => {
      // TODO: 后续换成对应字体图标组件
      return (
        <>&uarr;</>
      )
    }

    const backtopStyle = computed(() => {
      return {
        bottom: `${props.bottom}px` ,
        right: `${props.right}px` ,
      }
    })

    return () => {
      return (
        <div
          v-show={visible.value}
          class={ns.b()}
          style={backtopStyle.value}
          onClick={handleClick}
        >
          { ctx.slots.default?.() ?? defaultCpn()}
        </div>
      )
    }
  }
})