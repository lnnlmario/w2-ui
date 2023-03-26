import { defineComponent, computed } from 'vue'

import { iconProps, IconProps } from './iconTypes'

import Svg from './svg'

export default defineComponent({
  name: 'W2Icon',
  props: iconProps,
  setup(props: IconProps) {
    return () => {
      return (
        <Svg {...props} />
      )
    }
  }
})
