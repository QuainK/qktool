<template>
  <div id="main">
    <div id="title">
      <h2>猜数 GuessNumber</h2>
      <h3>{{ version }}</h3>
    </div>

    <div id="content" class="content-align-center">
      <label for="answer">请输入0-100的整数</label>
      <input id="answer" v-model="answer" max="100" min="0" placeholder="在此输入0-100的整数" type="number">
      <div id="btn-group">
        <button @click="compareAnswer()">确定</button>
        <button @click="replay()">重玩</button>
        <button @click="showNum()">答案</button>
      </div>
    </div>

    <div id="log">
      <button @click="displayChangelog">更新日志</button>
      <div v-if="isChangelogDisplayed">
        <div class="log-item">
          <span>2.1.0 - 2020.04.20</span>
          <p>样式稍作修改</p>
        </div>
        <div class="log-item">
          <span>2.0.0 - 2020.04.11</span>
          <p>使用 Vue.js 重构</p>
        </div>
        <div class="log-item">
          <span>1.2.0 - 2020.04.08</span>
          <p>优化 HTML/CSS/JS，应用全局风格</p>
        </div>
        <div class="log-item">
          <span>1.1.0 - 2016.08</span>
          <p>1.0.0 版本 (HTML 4.01) 文件丢失，重写 (HTML 5)</p>
        </div>
        <div class="log-item">
          <span>1.0.0 - 2011.07</span>
          <p>猜测随机生成的 0-100 的整数</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuessNumber',
  title: '猜数 GuessNumber',
  data() {
    return {
      version: '2.1.0',
      isChangelogDisplayed: false,
      num: -1,
      answer: '',
    }
  },
  mounted() {
    this.generateNewNum();
  },
  methods: {
    displayChangelog() {
      this.isChangelogDisplayed = !this.isChangelogDisplayed;
    },

    generateNewNum() {
      //random() 产生0-1的随机数，然后扩大100倍并向上取整[x]得到答案，即0-100的随机数
      this.num = Math.ceil(Math.random() * 100);
    },
    compareAnswer() {
      if (this.answer === this.num.toString()) {
        alert("恭喜答对！");
        this.replay();
      } else if (this.answer < this.num && this.answer >= 0) {
        alert("小了！");
      } else if (this.answer > this.num && this.answer <= 100) {
        alert("大了！");
      } else {
        alert("不符合的输入！应为0-100整数");
      }
      this.answer = "";
    },
    replay() {
      this.generateNewNum();
      alert("已经开始新的游戏！");
    },
    showNum() {
      alert("答案为" + this.num);
    }
  },
}
</script>

<style scoped>
#content label {
  width: 100%;
  margin: 1rem 0;
  font-family: "楷体", sans-serif;
  font-size: 1.5rem;
}

#content input {
  width: 300px;
  height: 2rem;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #999;
  border-radius: 5px;
  outline: none;
}

#content input:hover {
  border: 1px solid #ddd;
  background-color: #eee;
}

#content input:active {
  border: 1px solid #aaa;
  background-color: #bbb;
}

/*Chrome、Safari等关闭数字输入框的上下箭头*/
#content input::-webkit-outer-spin-button,
#content input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

/*FireFox关闭数字输入框上下箭头*/
#content input[type="number"] {
  -moz-appearance: textfield;
}

#btn-group {
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  margin: 1rem 0;
}

#content button {
  padding: .5rem;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

#content button:hover {
  background-color: #ccc;
  border: 1px solid #666;
}

#content button:active {
  background-color: #999;
  border: 1px solid #333;
}
</style>
