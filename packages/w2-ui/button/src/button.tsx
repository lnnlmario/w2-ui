import { ref, computed, defineComponent } from "vue";

import { Icon } from '../../icon'
import { buttonProps, IButtonProps, IButtonType } from './buttonTypes'
import useNamespace from '../../common/composables/useNamespace'

import './button.scss'

export default defineComponent({
  name: 'W2Button',
  props: buttonProps,
  components: { Icon },
  setup(props: IButtonProps, ctx) {
    const ns = useNamespace('button')

    const className = computed(() => {
      const base = ns.e('content')
      return [
        base,
        ns.m(props.type),
        props.round ? ns.m('round') : '',
        props.circle ? ns.m('circle') : '',
        props.disabled ? ns.m('disabled') : ns.em('content', props.type)
      ].join(' ')
    })

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
      if (props.type === 'default' as IButtonType) {
        color.value = '#3B82F6'
      }
    }
    const handleLeave = () => {
      color.value = getDefaultColor()
    }

    return () => {
      return (
        <div class={ns.b()} onMouseenter={handleEnter} onMouseleave={handleLeave}>
          <div class={className.value}>
            {ctx.slots.icon?.() ?? <IconCpn />}
            {ctx.slots.default?.()}
          </div>
        </div>
      )
    }
  }
});
