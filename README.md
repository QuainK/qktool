# qktool

QuainK 的工具箱网站

更新日志请移步至 [CHANGELOG.md](./CHANGELOG.md "CHANGELOG.md")

## 环境

- HTML 5 / CSS 3 / ECMAScript 6

- Vue.js 2.x

- @vue/cli 4

## 用法

1. 安装好必需依赖

```
npm install
```

2. 编译成发布版本

```
npm build
```

## 工程

- 公共资源（HTML 模板、图标）

  > /public/

- 主入口

  > /src/main.js
  >
  > /src/App.vue

- 路由

  > /src/router/

- 页面

  > /src/views/

- 页面资源（图片、样式表等）

  > /src/assets/

- 页面组件（公共顶部底部等）

  > /src/components/

## 布局

网页使用弹性布局 FlexBox，分成上中下三大块，顶部底部保持不变，主体部分使用路由更新页面视图。

- 顶部 header

  - 品牌 brand

  - 导航 menu (router-link)

- 主体 main (router-view)

  - 标题 title

  - 内容 content

- 底部 footer
