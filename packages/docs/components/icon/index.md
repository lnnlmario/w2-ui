# Icon 图标

提供了一套常用的字体图标，后面用到啥再加，写道了一个组件里，后续看能不能做成动态加载。

## 基本用法

:::demo 通过`type`属性指定要显示的图标。

```vue
<template>
  <div class="icon-view">
    <w2Icon type="search" />
    <w2Icon type="wrong" />
    <w2Icon type="yes" />
    <w2Icon type="edit" />
    <w2Icon type="up" />
    <w2Icon type="right" />
    <w2Icon type="down" />
    <w2Icon type="left" />
    <w2Icon type="collection" />
    <w2Icon type="trash" />
    <w2Icon type="loading" />
    <w2Icon type="setting" />
  </div>
</template>

<style scope>
.icon-view {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 1rem;
}
</style>
```

:::
