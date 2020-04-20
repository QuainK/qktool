<template>
  <div id="main">
    <div id="content">
      <h1>QKTool</h1><br><br><br>
      <h2>记录学习笔记</h2>
      <h2>展示实践作品</h2><br><br><br>
      <h2><a href="https://github.com/QuainK/qktool/blob/master/CHANGELOG.md">查看更新日志</a></h2>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'About',
    title: '关于 About',
    components: {
      Header, Footer
    }
  }
</script>

<style scoped>
  #content a {
    color: #000;
  }

  #content a:hover {
    color: #339;
  }
</style>
