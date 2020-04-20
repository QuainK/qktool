<template>
  <div id="error">
    <p id="title">404 - Not Found</p>
    <p>抱歉，您访问的页面不存在</p>
    <a href="/">返回首页</a>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Err404',
    title: '404',
    components: {
      Header, Footer
    }
  }
</script>

<style scoped>
  #error {
    flex: 1 1 auto;
    width: 100%;
    background-color: #eee;
  }

  #title {
    font-size: 1.5rem;
  }

  #error * {
    margin: 3rem 0;
  }

  #error a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #000;
  }

  #error a:hover {
    text-decoration: none;
    color: #999;
  }
</style>
