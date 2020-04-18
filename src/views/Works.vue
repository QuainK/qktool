<template>
  <div id="main">
    <div class="item">
      <div class="item-img">
        <a href="/MgtSysDemo">
          <img alt="管理系统示例 Management System Demo" src="@/assets/img/svg/mgtsys.svg">
        </a>
      </div>
      <p>管理系统示例</p>
      <p>Mgt Sys Demo</p>
    </div>
    <div class="item">
      <div class="item-img">
        <a href="/works/BDHConverter">
          <img alt="常用进制转换器 BDHConverter" src="@/assets/img/svg/calculator.svg">
        </a>
      </div>
      <p>常用进制转换器</p>
      <p>BDHConverter</p>
    </div>
    <div class="item">
      <div class="item-img">
        <a href="/works/So">
          <img alt="搜索引擎整合 SearchEngineCollection" src="@/assets/img/svg/search.svg">
        </a>
      </div>
      <p>搜索引擎整合</p>
      <p>So</p>
    </div>
    <div class="item">
      <div class="item-img">
        <a href="/Hyacinth">
          <img alt="风信子 Hyacinth" src="@/assets/img/svg/hyacinth.svg">
        </a>
      </div>
      <p>风信子</p>
      <p>Hyacinth</p>
    </div>
    <div class="item">
      <div class="item-img">
        <router-link to="/works/GuessNumber">
          <!--          <a href="/works/GuessNumber/">-->
          <img alt="猜数 GuessNumber" src="@/assets/img/svg/game.svg">
          <!--          </a>-->
        </router-link>
      </div>
      <p>猜数</p>
      <p>GuessNumber</p>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Works',
    title: '作品 Works',
    components: {
      Header, Footer
    }
  }
</script>
