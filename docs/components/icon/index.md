# Icon 图标

提供了一套常用的字体图标，后面用到啥再加，写道了一个组件里，后续看能不能做成动态加载。

## 基本用法

:::demo 通过`type`属性指定要显示的图标。

```vue
<template>
  <div class="icon-view">
    <w2Icon color="pink">icon</w2Icon>
    <w2Icon color="green"><W2IconAim></w2Icon>
    <w2Icon color="green" size="22"><W2IconReading></w2Icon>
    <w2Icon type="search" />
    <w2Icon type="edit" />
  </div>
</template>

<style scope>
.icon-view {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 1.5rem;
}
</style>
```

:::
