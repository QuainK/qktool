<!--公共头部-->
<template>
  <div id="header">
    <h1 id="header-brand">
      <a href="/">QKTool</a>
      <button id="header-menu-toggle" @click="isNavMenuShown = !isNavMenuShown">
        <img src="../assets/img/svg/menu.svg" alt="导航菜单">
      </button>
    </h1>
    <div id="header-menu" v-show="isNavMenuShown">
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
    data() {
      return {
        isNavMenuShown: true,
      }
    },
  }
</script>

<style scoped>
  /*header通用样式*/
  #header {
    display: flex;
    display: -webkit-flex;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    background-color: #333;
    box-sizing: border-box;
    padding: .5rem 0;
  }

  #header a {
    color: #fff;
  }

  #header a:hover {
    color: #999;
  }

  #header-menu-toggle {
    position: absolute;
    right: 1rem;
    font-size: 1.5rem;
    border: 1px solid #999;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    color: #ccc;
  }

  #header-menu-toggle:hover {
    color: #ccc;
    background-color: #666;
  }

  #header-menu-toggle:active {
    color: #fff;
    background-color: #333;
  }

  #header-menu-toggle img {
    width: 1rem;
    height: 1rem;
  }

  #header-menu {
    display: flex;
    display: -webkit-flex;
  }

  /*header适配PC端*/
  @media screen and (min-width: 700px) {
    #header {
      justify-content: center;
      align-items: center;
    }

    #header-brand {
      flex: 0 0 auto;
      padding-left: 3rem;
    }

    /*PC端不需要导航栏展开按钮，设置为隐藏*/
    #header-menu-toggle {
      display: none;
    }

    #header-menu {
      display: flex;
      display: -webkit-flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 3rem;
      flex: 1 0 auto;
    }

    #header-menu > * {
      padding: 0 2rem;
    }
  }

  /*header适配移动端*/
  @media screen and (max-width: 699px) {
    #header {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    #header-brand {
      flex: 0 0 auto;
      padding: .5rem 0;
      width: 100%;
    }

    #header-menu {
      /*display: none;*/
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
      width: 100%;
      flex-wrap: wrap;
    }

    #header-menu > * {
      padding: .5rem 0;
    }
  }
</style>
