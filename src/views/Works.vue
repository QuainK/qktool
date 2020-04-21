<template>
  <div id="main">
    <div id="title">作品</div>
    <div id="content">
      <div class="item-container">
        <div class="item">
          <div class="item-img">
            <a href="https://qktool.top/MgtSysDemo/">
              <img alt="管理系统示例 Management System Demo" src="../assets/img/svg/mgtsys.svg">
            </a>
          </div>
          <p>管理系统示例</p>
          <p>MgtSysDemo</p>
        </div>
        <div class="item">
          <div class="item-img">
            <router-link to="/works/BDHConverter">
              <img alt="常用进制转换器 BDHConverter" src="../assets/img/svg/calculator.svg">
            </router-link>
          </div>
          <p>常用进制转换器</p>
          <p>BDHConverter</p>
        </div>
        <div class="item">
          <div class="item-img">
            <router-link to="/works/So">
              <img alt="搜索引擎整合 SearchEngineCollection" src="../assets/img/svg/search.svg">
            </router-link>
          </div>
          <p>搜索引擎整合</p>
          <p>So</p>
        </div>
        <div class="item">
          <div class="item-img">
            <a href="https://qktool.top/Hyacinth/">
              <img alt="风信子 Hyacinth" src="../assets/img/svg/hyacinth.svg">
            </a>
          </div>
          <p>风信子</p>
          <p>Hyacinth</p>
        </div>
        <div class="item">
          <div class="item-img">
            <router-link to="/works/GuessNumber">
              <img alt="猜数 GuessNumber" src="../assets/img/svg/game.svg">
            </router-link>
          </div>
          <p>猜数</p>
          <p>GuessNumber</p>
        </div>
      </div>
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

<style scoped>
  .item-container {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .item {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    max-width: 120px;
  }

  .item p {
    margin: .2rem 0;
    color: #333;
  }

  .item-img {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;
    border: 1px solid rgba(255, 255, 255, .1);
    border-radius: 20px;
    box-shadow: 10px 10px 20px #999,
    -10px -10px 20px #ddd;
    transition: box-shadow .2s ease-in-out;
  }

  .item-img:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 1),
    0 0 0 rgba(255, 255, 255, .1),
    inset 10px 10px 20px rgba(0, 0, 0, .1),
    inset -10px -10px 20px rgba(255, 255, 255, .1);
  }

  .item-img a {
    display: inline-block;
    width: 100%;
  }
</style>
