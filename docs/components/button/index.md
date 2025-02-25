# Button 按钮

## 基础用法

使用 `type`、 `round` 、 `circle`和 `size` 来定义按钮的样式。

:::demo
```vue
<template>
  <div class="container">
    <w2-button>default</w2-button>
    <w2-button type="primary">primary</w2-button>
    <w2-button type="success">success</w2-button>
    <w2-button type="warning">warning</w2-button>
    <w2-button type="danger">danger</w2-button>
    <w2-button type="info">info</w2-button>
  </div>

  <div class="container mt-1">
    <w2-button round>default</w2-button>
    <w2-button round type="primary">primary</w2-button>
    <w2-button round type="success">success</w2-button>
    <w2-button round type="warning">warning</w2-button>
    <w2-button round type="danger">danger</w2-button>
    <w2-button round type="info">info</w2-button>
  </div>

  <div class="container mt-1">
    <w2-button circle icon="delete" />
    <w2-button circle type="primary" icon="search" />
    <w2-button circle type="success" icon="edit"/>
    <w2-button circle type="warning" icon="failed"/>
    <w2-button circle type="danger" icon="top"/>
    <w2-button circle type="info" icon="right" />
  </div>
</template>

<style scoped>
.mt-1 {
  margin-top: 1rem;
}

.container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
</style>
```
:::

## 禁用状态

:::demo
```vue
<template>
  <div class="container">
    <w2-button disabled>default</w2-button>
    <w2-button disabled type="primary">primary</w2-button>
    <w2-button disabled type="success">success</w2-button>
    <w2-button disabled type="warning">warning</w2-button>
    <w2-button disabled type="danger">danger</w2-button>
    <w2-button disabled type="info">info</w2-button>
  </div>

  <div class="container mt-1">
    <w2-button disabled round>default</w2-button>
    <w2-button disabled round type="primary">primary</w2-button>
    <w2-button disabled round type="success">success</w2-button>
    <w2-button disabled round type="warning">warning</w2-button>
    <w2-button disabled round type="danger">danger</w2-button>
    <w2-button disabled round type="info">info</w2-button>
  </div>

  <div class="container mt-1">
    <w2-button disabled circle icon="delete" />
    <w2-button disabled circle type="primary" icon="search" />
    <w2-button disabled circle type="success" icon="edit"/>
    <w2-button disabled circle type="warning" icon="failed"/>
    <w2-button disabled circle type="danger" icon="top"/>
    <w2-button disabled circle type="info" icon="right" />
  </div>
</template>

<style scoped>
.mt-1 {
  margin-top: 1rem;
}

.container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
</style>
```
:::

## 链接按钮

:::demo
```vue
<template>
  <div class="container">
    <w2-button link>default</w2-button>
    <w2-button link type="primary">primary</w2-button>
    <w2-button link type="success">success</w2-button>
    <w2-button link type="warning">warning</w2-button>
    <w2-button link type="danger">danger</w2-button>
    <w2-button link type="info">info</w2-button>
  </div>
  <div class="container">
    <w2-button disabled link>default</w2-button>
    <w2-button disabled link type="primary">primary</w2-button>
    <w2-button disabled link type="success">success</w2-button>
    <w2-button disabled link type="warning">warning</w2-button>
    <w2-button disabled link type="danger">danger</w2-button>
    <w2-button disabled link type="info">info</w2-button>
  </div>
</template>

<style scoped>
.mt-1 {
  margin-top: 1rem;
}

.container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
</style>
```
:::


## 图标按钮

:::demo 
```vue
<template class="container">
  <w2-button type="primary" icon="delete"></w2-button>
  <w2-button type="default" size="default">
    <w2-icon>
      <W2IconAim />
    </w2-icon>
  </w2-button>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
</>
```
:::

## 调整尺寸

:::demo

```vue
<template class="container">
  <w2-button type="primary" icon="edit" />
  <w2-button type="primary" icon="search">搜索</w2-button>
  <w2-button type="primary">
    上传 <w2-icon type="upload" color="#fff" />
  </w2-button>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
</>
```

:::