# Button 按钮

基础的卡片用法。

<W2Button />

::: demo 使用 `size`、`style` 属性来定义 Card 的样式。

```vue
<template>
  <w2-button />
<template>

<script setup lang='ts'>
import { ref } from 'vue'

// 显隐状态
const show = ref(false)
// 打开容器
const open = () => {
	show.value = true
}
</script>
```

:::