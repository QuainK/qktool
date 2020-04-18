<template>
  <div id="main">
    <img alt="QKProfilePhoto" id="profile-photo" src="../assets/img/QKProfilePhoto.jpg">
    <div id="greeting">Hello World</div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',
    title: 'QKTool',
    components: {
      Header, Footer
    }
  }
</script>

<style scoped>
  #profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 15px;
  }

  #greeting {
    display: block;
    width: 100%;
    font-size: 1.5rem;
  }
</style>
