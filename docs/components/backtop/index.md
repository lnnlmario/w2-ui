# Backtop 回到顶部

返回页面顶部的操作按钮。

## 基础用法

:::demo

```vue  
<template>
  向下滑动来查看容器右下角的按钮。
  <W2Backtop :right="150" :bottom="100" :visibility-height="5" />
</template>
```

:::


## 自定义内容

显示区域被固定为`40px * 40px`的区域，其中的内容可自定义。

:::demo

```vue
<template>
  <W2Backtop :bottom="150">
    向上
  </W2Backtop>
</template>
```

:::