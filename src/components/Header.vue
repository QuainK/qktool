<!--公共头部-->
<template>
  <div id="header">
    <h1 id="header-brand">
      <a href="/">QKTool</a>
    </h1>
    <div id="header-menu">
      <router-link to="/">首页</router-link>
      <router-link to="/notes">笔记</router-link>
      <router-link to="/works">作品</router-link>
      <router-link to="/about">关于</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>
