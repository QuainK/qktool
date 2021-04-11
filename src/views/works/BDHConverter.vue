<template>
  <div id="main">
    <div id="title">
      <h2>常用进制转换器 BDHConverter</h2>
      <h3>{{ version }}</h3>
    </div>

    <div id="content" class="content-align-center">
      <form>
        <label for="num-bin">二进制&nbsp;Binary</label>
        <input id="num-bin" v-model="binValue" min="0" placeholder="Binary" type="number"
               @input="calculate(2,binValue)">
        <label for="num-oct">八进制&nbsp;Octal</label>
        <input id="num-oct" v-model="octValue" min="0" placeholder="Octal" type="number"
               @input="calculate(8,octValue)">
        <label for="num-dec">十进制&nbsp;Decimal</label>
        <input id="num-dec" v-model="decValue" min="0" placeholder="Decimal" type="number"
               @input="calculate(10,decValue)">
        <label for="num-hex">十六进制&nbsp;Hexadecimal（不区分大小写）</label>
        <input id="num-hex" v-model="hexValue" placeholder="Hexadecimal（不区分大小写）" type="text"
               @input="calculate(16,hexValue)">
        <button type="reset">清除所有</button>
      </form>
    </div>

    <div id="log">
      <button @click="displayChangelog">更新日志</button>
      <div v-if="isDisplayChangelog">
        <div class="log-item">
          <span>3.0.1 - 2020.04.20</span>
          <p>样式稍作修改</p>
        </div>
        <div class="log-item">
          <span>3.0.0 - 2020.04.11</span>
          <p>使用 Vue.js 重构</p>
        </div>
        <div class="log-item">
          <span>2.0.0 - 2020.04.08</span>
          <p>优化 HTML/CSS/JS，应用全局风格</p>
        </div>
        <div class="log-item">
          <span>2.0.0-beta - 2019.05.09</span>
          <p>重新编写 JavaScript 代码，大幅减少代码量</p>
        </div>
        <div class="log-item">
          <span>1.1.0-beta - 2019.03.22</span>
          <p>增加八进制换算功能</p>
        </div>
        <div class="log-item">
          <span>1.0.0-beta - 2019.03.21</span>
          <p>完成二进制、十进制、十六进制互转功能</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BDHConverter',
  title: '常用进制转换器 BDHConverter',
  data() {
    return {
      version: '3.0.1',
      isDisplayChangelog: false,
      binValue: '',
      octValue: '',
      decValue: '',
      hexValue: '',
    }
  },
  methods: {
    calculate(changedNumRadix, inputValue) {
      this.binValue = parseInt(inputValue, changedNumRadix).toString(2);
      this.octValue = parseInt(inputValue, changedNumRadix).toString(8);
      this.decValue = parseInt(inputValue, changedNumRadix).toString(10);
      this.hexValue = parseInt(inputValue, changedNumRadix).toString(16);
    },
    displayChangelog() {
      this.isDisplayChangelog = !this.isDisplayChangelog;
    },
  },
}
</script>

<style scoped>
label {
  display: block;
  margin: 1rem 0;
  text-align: left;
}

input {
  display: block;
  width: 18rem;
  height: 2rem;
  margin: 1rem 0;
  padding: 0 .5rem;
  color: #000;
  border: 1px solid #aaa;
  border-radius: 5px;
  outline: none;
}

input:hover {
  border: 1px solid #ddd;
  background-color: #eee;
}

input:active {
  border: 1px solid #aaa;
  background-color: #bbb;
}

/*Chrome、Safari等关闭数字输入框的上下箭头*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

/*FireFox关闭数字输入框上下箭头*/
input[type="number"] {
  -moz-appearance: textfield;
}

#content button {
  width: 100px;
  padding: 0.5em 1em;
  text-align: center;
  font-size: 1em;
  background-color: #9cf;
  border: 1px solid #69c;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

#content button:hover {
  background-color: #69c;
  border: 1px solid #369;
}

#content button:active {
  color: #fff;
  background-color: #369;
  border: 1px solid #036;
}
</style>
