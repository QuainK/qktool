<template>
  <div id="main">
    <div id="title">
      <h2>常用进制转换器 BDHConverter</h2>
      <h3>3.0.0</h3>
    </div>

    <div id="content">
      <form>
        <label for="num-bin">二进制&nbsp;Binary</label>
        <input @input="calculate(2,binValue)" id="num-bin" min="0" placeholder="Binary" type="number"
               v-model="binValue">
        <label for="num-oct">八进制&nbsp;Octal</label>
        <input @input="calculate(8,octValue)" id="num-oct" min="0" placeholder="Octal" type="number"
               v-model="octValue">
        <label for="num-dec">十进制&nbsp;Decimal</label>
        <input @input="calculate(10,decValue)" id="num-dec" min="0" placeholder="Decimal" type="number"
               v-model="decValue">
        <label for="num-hex">十六进制&nbsp;Hexadecimal（不区分大小写）</label>
        <input @input="calculate(16,hexValue)" id="num-hex" placeholder="Hexadecimal（不区分大小写）" type="text"
               v-model="hexValue">
        <button type="reset">清除所有</button>
      </form>
    </div>

    <div id="log">
      <p>更新日志</p>
      <div class="log-item">
        <span>版本 3.0.0 日期时间 2020.04.11</span>
        <p>使用Vue.js重构</p>
      </div>
      <div class="log-item">
        <span>版本 2.0.0 日期时间 2020.04.08</span>
        <p>优化HTML/CSS/JS，应用全局风格</p>
      </div>
      <div class="log-item">
        <span>版本 2.0.0-beta 日期时间 2019.05.09</span>
        <p>重新编写JavaScript代码，大幅减少代码量</p>
      </div>
      <div class="log-item">
        <span>版本 1.1.0-beta 日期时间 2019.03.22</span>
        <p>增加八进制换算功能</p>
      </div>
      <div class="log-item">
        <span>版本 1.0.0-beta 日期时间 2019.03.21</span>
        <p>完成二进制、十进制、十六进制互转功能</p>
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
      }
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
    color: #000;
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

  button {
    width: 100px;
    padding: 0.5em 1em;
    text-align: center;
    font-size: 1em;
    background-color: #ff9;
    border: 1px solid #cc6;
    border-radius: 10px;
    outline: none;
  }

  button:hover {
    background-color: #993;
    border: 1px solid #aa4;
  }

  button:active {
    color: #fff;
    background-color: #660;
    border: 1px solid #882;
  }
</style>
