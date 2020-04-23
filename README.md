# QKTool

QKTool，主要用于记录学习笔记和展示实践作品的个人网站。

QKTool is a website which is used to record study notes and show practical works.

更新日志请移步至 [CHANGELOG.md](./CHANGELOG.md "CHANGELOG.md")

Please move to [CHANGELOG.md](./CHANGELOG.md "CHANGELOG.md") to watch the changelog.

## 环境 Environment

- HTML 5 / CSS 3 / ECMAScript 6

- Vue.js 2.x, @vue/cli 4

## 用法 Usage

### 1. 安装好必需的插件包 Install packages required.

```yarn
yarn install
```

或者 or

```npm
npm install
```

接着可以编辑修改了。 And we can edit everything.

### 2. 编译成发布版本 Build to dist files.

```yarn
yarn build
```

或者 or

```npm
npm build
```

## 工程 Projects

- 静态资源（页面模板、页面图标） Static resources(pages' modules and favicon)

  > /public/

- 主入口 Main entry

  > /src/main.js
  >
  > /src/App.vue

- 路由 Router

  > /src/router/

- 页面 Pages

  > /src/views/

- 公共资源（图片、样式表）Public resources(images, css)

  > /src/assets/

- 公共组件（页面头部尾部）Public components(pages' header and footer)

  > /src/components/

## 结构 Structure

网页使用弹性布局 FlexBox，大致分成上中下三大块。头部尾部不变，主体部分使用路由更新视图。

The pages use the FlexBox, which are substantially divided into three parts. The header and the footer are both constant, and the main part use the router to refresh views.

- 头部 header

  - 品牌 brand

  - 导航 menu（router-link）

- 主体 main（router-view）

  - 标题 title

  - 内容 content

- 尾部 footer
