<template>
  <div id="header">
    <h1 id="header-brand">
      <a href="/">QKTool</a>
    </h1>
    <button v-if="isDeviceMobile" id="header-menu-toggle" @click="switchDisplayNavMenu">
      <img alt="导航菜单" src="../assets/img/svg/menu.svg">
    </button>
    <div v-if="isNavMenuShown" id="header-menu">
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
      isDeviceMobile: false,
      isNavMenuShown: true,
    }
  },
  mounted() {
    const that = this;
    that.initNavMenu(); // 页面挂载后就开始适配
    window.onresize = () => {
      that.initNavMenu(); // 每次屏幕改变，都重新适配
    }
  },
  methods: {
    initNavMenu() {
      const that = this;
      if (document.body.clientWidth >= 700) {//PC端，默认显示导航栏
        that.isDeviceMobile = false;
        that.isNavMenuShown = true;
      } else if (document.body.clientWidth <= 699) {//移动端，默认关闭导航栏，需要手动点击展开
        that.isDeviceMobile = true;
        that.isNavMenuShown = false;
      }
    },
    switchDisplayNavMenu() {
      this.isNavMenuShown = !this.isNavMenuShown;
    }
  }
}
</script>

<style scoped>
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
  top: 1rem;
  right: 1rem;
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 0 .5rem;
  color: #ccc;
}

#header-menu-toggle img {
  width: 1.5rem;
  height: 1.5rem;
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
