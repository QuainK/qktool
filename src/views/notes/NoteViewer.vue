<template>
  <div id="main">
    <div id="title">排版测试</div>
    <div id="content">
      <ol id="note-info">
        <li id="note-author">QuainK</li>
        <li id="date">2020.04.23</li>
      </ol>
      <div id="note-content">
        <p>此笔记用来测试排版。</p>
        <p>`1234567890-=~!@#$%^&*()_+</p>
        <p>中文，中文。English, English. 中文，中文。English, English. </p>
        <p>使用lorem随机生成一些段落。</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi corporis culpa dolor doloribus eligendi
          facilis fuga illo mollitia nam nobis nostrum omnis perferendis possimus, quaerat repellendus repudiandae
          veniam voluptates!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque eum harum nulla perferendis, possimus
          provident. Autem cum, doloribus dolorum eos excepturi impedit labore? Eaque molestias natus pariatur porro
          rerum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur cum dolores ducimus facere
          modi nostrum numquam quaerat qui repellat. Ad atque deleniti dolores eius magnam odio quas similique
          tenetur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis, delectus dicta dolore, dolorum
          explicabo, facilis illum magnam minima natus ratione similique unde. Alias amet consequuntur iusto quae soluta
          temporibus.</p>
        <p>使用狗屁不通文章生成器随机生成一些中文段落。</p>
        <p>一般来说， 而这些并不是完全重要，更加重要的问题是， 既然如何， 这种事实对本人来说意义重大，
          相信对这个世界也是有一定意义的。 生活中，若博客文章排版测试出现了，我们就不得不考虑它出现了的事实。
          这种事实对本人来说意义重大，相信对这个世界也是有一定意义的。 我们一般认为，抓住了问题的关键，
          其他一切则会迎刃而解。 了解清楚博客文章排版测试到底是一种怎么样的存在，是解决一切问题的关键。
          我们都知道，只要有意义，那么就必须慎重考虑。 所谓博客文章排版测试，关键是博客文章排版测试需要如何写。
          一般来讲，我们都必须务必慎重的考虑考虑。 可是，即使是这样，博客文章排版测试的出现仍然代表了一定的意义。
          要想清楚，博客文章排版测试，到底是一种怎么样的存在。 要想清楚，博客文章排版测试，到底是一种怎么样的存在。
          在这种困难的抉择下，本人思来想去，寝食难安。 博客文章排版测试，到底应该如何实现。 总结的来说，
          卡莱尔说过一句富有哲理的话，过去一切时代的精华尽在书中。这启发了我。</p>
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
      noteId: 1,
      noteDate: '2020.04.22',
    }
  }
}
</script>

<style scoped>
#note-info {
  display: block;
  font-size: .8rem;
  color: #666;
}

#note-info * {
  display: inline-block;
  /*background-color: #3366cc;*/
  margin: 0 1rem;
}

#note-content {
  display: block;
  align-self: center;
  text-align: left;
  text-indent: 2rem;
  line-height: 1.5rem;
  padding: .5rem;
}

@media screen and (min-width: 700px) {
  #note-content {
    width: 50%;
  }
}

@media screen and (max-width: 699px) {
  #note-content {
    width: 100%;
  }
}

#note-content p {
  margin: 1rem 0;
}
</style>
