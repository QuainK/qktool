<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <div id="main">
    <div id="title">
      <h2>搜索引擎整合 So</h2>
      <h3>{{ version }}</h3>
    </div>

    <div id="content" class="content-align-center">
      <div class="item-container">
        <div class="item">
          <img alt="必应" src="../../assets/img/logo_bing.png">
          <form action="https://cn.bing.com/search" method="get">
            <input name="q" placeholder="在此输入内容并回车开始必应" type="text">
          </form>
        </div>

        <div class="item">
          <img alt="Google" src="../../assets/img/logo_google.png">
          <form action="https://www.google.com/search" method="get">
            <input name="q" placeholder="在此输入内容并回车开始谷歌" type="text">
          </form>
        </div>

        <div class="item">
          <img alt="百度" src="../../assets/img/logo_baidu.png">
          <form action="https://www.baidu.com/s" method="get">
            <input name="word" placeholder="在此输入内容并回车开始百度" type="text" value="">
          </form>
        </div>

        <div class="item">
          <img alt="搜狗" src="../../assets/img/logo_sogou.jpg">
          <form action="https://m.sogou.com/web/searchList.jsp" method="get">
            <input name="keyword" placeholder="在此输入内容并回车开始搜狗" type="text">
          </form>
        </div>
      </div>
    </div>

    <div id="log">
      <button @click="displayChangelog">更新日志</button>
      <div v-if="isDisplayChangelog">
        <div class="log-item">
          <span>1.0.2 - 2020.04.20</span>
          <p>样式稍作修改</p>
        </div>
        <div class="log-item">
          <span>1.0.1 - 2020.04.08</span>
          <p>优化 HTML/CSS/JS ，应用全局风格</p>
        </div>
        <div class="log-item">
          <span>1.0.0 - 2018.10</span>
          <p>常用搜索引擎整合</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'So',
  title: '搜索引擎整合 So',
  data() {
    return {
      version: '1.0.2',
      isDisplayChangelog: false,
    }
  },
  methods: {
    displayChangelog() {
      this.isDisplayChangelog = !this.isDisplayChangelog;
    },
  }
}
</script>

<style scoped>
#content {
  background-color: #fff;
}

.item-container {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.item {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  padding: .5rem 0;
  width: 100px;
  height: 50px;
}

input {
  margin: .5rem 0;
  width: 250px;
  height: 2rem;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  padding: 0 .5rem;
}

input:hover {
  background-color: #ccc;
  border: 2px solid #999;
}

input:active {
  background-color: #999;
  border: 2px solid #666;
}
</style>
