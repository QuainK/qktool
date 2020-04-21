<template>
  <div id="main">
    <div id="title">笔记</div>
    <div id="content">
      <h2>暂时没有内容哦 (=・ω・=) <br>先康康别的↗</h2>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Notes',
    title: '笔记 Notes',
    components: {
      Header, Footer
    },
  }
</script>
