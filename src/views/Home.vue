<template>
  <div id="main">
    <div id="content">
      <img alt="QKProfilePhoto" id="profile-photo" src="../assets/img/QKProfilePhoto.jpg">
      <br><br><br>
      <div id="greeting">Hello World</div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Home',
    title: '首页 Home',
    components: {
      Header, Footer
    }
  }
</script>

<style scoped>
  @media screen and (min-width: 700px) {
    #main {
      background-image: url("../assets/img/home-bg-pc.jpg");
      background-size: 100% 100%;
    }
  }

  @media screen and (max-width: 699px) {
    #main {
      background-image: url("../assets/img/home-bg-mobile.jpg");
      background-size: 100% 100%;
    }
  }

  #profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    box-shadow: 0 0 30px 10px black, 0 0 30px 10px black;
  }

  #greeting {
    display: block;
    width: 100%;
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
  }
</style>
