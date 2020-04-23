<template>
  <div id="main">
    <div id="title">笔记</div>
    <div id="content" class="content-align-center">
      <div id="note-list">
        <div id="note-order">按日期倒序排序</div>
        <div class="note-item">
          <h3 class="note-item-title">
            <router-link to="/notes/note1">排版测试</router-link>
          </h3>
          <div class="note-item-abstract">
            <p>此笔记用来测试排版。</p>
          </div>
          <div class="note-item-info">
            <div class="note-item-info-id">编号 {{noteId}}</div>
            <div class="note-item-info-id">日期 {{noteDate}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Notes',
    title: '笔记 Notes',
    components: {
      Header, Footer
    },
    data() {
      return {
        noteId: 0,
        noteDate: '2020.04.23',
      }
    }
  }
</script>

<style scoped>
  #note-order {
    text-align: right;
    padding: 0 .5rem;
  }

  #note-list {
    display: block;
  }

  @media screen and (min-width: 700px) {
    #note-list {
      width: 50%;
    }
  }

  @media screen and (max-width: 699px) {
    #note-list {
      width: 100%;
    }
  }

  .note-item {
    display: block;
    width: 100%;
    border-radius: 10px;
    margin: 1rem 0;
    text-align: left;
    padding: 1rem;
    background-color: #eee;
    box-shadow: 5px 5px 5px 1px #999;
  }

  .note-item:hover {
    background-color: #fff;
  }

  .note-item > * {
    margin: .5rem;
  }

  .note-item-title a {
    color: #333;
  }

  .note-item-title a:hover {
    color: #f00;
  }

  .note-item-abstract {
    text-indent: 2rem;
  }

  .note-item-info {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: #999;
    font-size: .8rem;
  }
</style>
