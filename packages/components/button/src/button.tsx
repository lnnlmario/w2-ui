import { useNamespace } from '@lnnlmario/hooks'
import { ref, computed, defineComponent } from "vue";

import { Icon } from '../../icon'
import { buttonProps, IButtonProps, IButtonType } from './buttonTypes'

import './button.scss'

export default defineComponent({
  name: 'W2Button',
  props: buttonProps,
  components: { Icon },
  setup(props: IButtonProps, ctx) {
    const ns = useNamespace('button')

    const toClassStr = (arr: Array<String>) => arr.filter((s) => s).join(' ')

    const className = computed(() => {
      const base = ns.e('content')
      return toClassStr([
        base,
        ns.em('content', props.type),
        ns.m(props.size),
        props.round ? ns.is('round') : '',
        props.circle ? ns.is('circle') : '',
        props.disabled ? ns.is('disabled') : ''
      ])
    })

    const linkClassName = computed(() => {
      if (!props.link) return ''

      return toClassStr([
        ns.e('link'),
        props.disabled ? ns.is('disabled') : '',
        props.link ? ns.em('link', props.type) : '',
      ])
    })

    const allClassName = computed(() => props.link ? linkClassName.value : className.value)

    // 按钮类型为`default`并且是圆形按钮时，颜色为`#333`，否则为`#fff`
    const getDefaultColor = () => props.type === 'default' as IButtonType && props.circle ? '#333' : '#fff'

    const color = ref(getDefaultColor())

    const IconCpn = () => {
      if (props.icon) {
        return <Icon type={props.icon} color={color.value}></Icon>
      }
      return
    }

    // 用鼠标进入和离开事件来改变按钮颜色
    const handleEnter = () => {
      if (props.type === 'default' as IButtonType && !props.disabled) {
        color.value = '#3B82F6'
      }
    }
    const handleLeave = () => {
      color.value = getDefaultColor()
    }

    return () => {
      return (
        <button
          class={`${ns.b()} ${allClassName.value}`}
          disabled={props.disabled}
          onMouseenter={handleEnter}
          onMouseleave={handleLeave}
        >
            {ctx.slots.icon?.() ?? <IconCpn />}
            {ctx.slots.default?.()}
        </button>
      )
    }
  }
});
