import { toRefs, computed, defineComponent, defineAsyncComponent } from 'vue'
import { iconProps, IconProps } from './iconTypes'

export default defineComponent({
  name: 'W2Icon',
  props: iconProps,
  setup(props: IconProps) {
    // 动态导入图标组件
    const AsyncSvg = defineAsyncComponent(() => import(`./components/${props.type}`))

    const { size, color } = toRefs(props)

    // 设置图标颜色
    const svgStyle = computed(() => ({
      fill: color.value
    }))

    return () => {
      return (
        <svg
          class="icon"
          width={`${size.value}px`}
          height={`${size.value}px`}
          style={svgStyle.value}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AsyncSvg />
        </svg>
      )
    }
  }
})
