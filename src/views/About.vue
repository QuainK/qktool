<template>
  <div id="main">
    <div id="title">关于</div>
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
    display: block;
    padding: 1rem;
    color: #000;
    border: 1px solid #333;
    border-radius: 5px;
  }

  #content a:hover {
    background-color: #ddd;
    color: #000;
    box-shadow: 0 0 1px 1px #666;
  }

  #content a:active {
    background-color: #fff;
    color: #000;
    box-shadow: 0 0 1px 1px #000;
  }
</style>
