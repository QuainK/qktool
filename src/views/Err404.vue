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
  }

  #title {
    font-size: 1.5rem;
  }

  #error * {
    margin: 3rem 0;
  }

  #error a {
    padding: 1rem;
    font-size: 1.1rem;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 15px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 1),
    -10px -10px 10px rgba(255, 255, 255, .1);
    transition: box-shadow .2s ease-in-out;
  }

  #error a:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 1),
    0 0 0 rgba(255, 255, 255, .1),
    inset 10px 10px 10px rgba(0, 0, 0, .5),
    inset -10px -10px 10px rgba(255, 255, 255, .1);
  }
</style>
