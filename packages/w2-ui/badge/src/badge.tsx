import { defineComponent } from "vue";

import { badgeProps, BadgeProps } from './badgeTypes'

export default defineComponent({
  name: 'W2Badge',
  props: badgeProps, // 传入props定义
  setup(props: BadgeProps, ctx) {
    return () => {
      return (
        <div>Badge 徽章</div>
      )
    }
  }
});
