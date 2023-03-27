# Button 按钮

## 基础用法

使用 `type`、 `round` 、 `circle`和 `size` 来定义按钮的样式。

:::demo
```vue
<template>
  <div class="container">
    <w2-button>Default</w2-button>
    <w2-button type="primary">primary</w2-button>
    <w2-button type="success">success</w2-button>
    <w2-button type="warning">warning</w2-button>
    <w2-button type="danger">danger</w2-button>
    <w2-button type="info">info</w2-button>
  </div>

  <div class="container mt-1">
    <w2-button round>Default</w2-button>
    <w2-button round type="primary">primary</w2-button>
    <w2-button round type="success">success</w2-button>
    <w2-button round type="warning">warning</w2-button>
    <w2-button round type="danger">danger</w2-button>
    <w2-button round type="info">info</w2-button>
  </div>

  <div class="container mt-1">
    <w2-button circle icon="trash" />
    <w2-button circle type="primary" icon="search" />
    <w2-button circle type="success" icon="yes"/>
    <w2-button circle type="warning" icon="wrong"/>
    <w2-button circle type="danger" icon="left"/>
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

## 禁用状体

:::demo
```vue
<template>
  <div class="container">
    <w2-button disabled>Default</w2-button>
    <w2-button disabled type="primary">primary</w2-button>
    <w2-button disabled type="success">success</w2-button>
    <w2-button disabled type="warning">warning</w2-button>
    <w2-button disabled type="danger">danger</w2-button>
    <w2-button disabled type="info">info</w2-button>
  </div>

  <div class="container mt-1">
    <w2-button disabled round>Default</w2-button>
    <w2-button disabled round type="primary">primary</w2-button>
    <w2-button disabled round type="success">success</w2-button>
    <w2-button disabled round type="warning">warning</w2-button>
    <w2-button disabled round type="danger">danger</w2-button>
    <w2-button disabled round type="info">info</w2-button>
  </div>

  <div class="container mt-1">
    <w2-button disabled circle icon="trash" />
    <w2-button disabled circle type="primary" icon="search" />
    <w2-button disabled circle type="success" icon="yes"/>
    <w2-button disabled circle type="warning" icon="wrong"/>
    <w2-button disabled circle type="danger" icon="left"/>
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

## 图标按钮

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