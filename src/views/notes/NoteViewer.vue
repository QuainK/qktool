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
        <p>引用自维基百科</p>
        <p>UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码，也是一种前缀码。
          它可以用一至四个字节对Unicode字符集中的所有有效编码点进行编码，属于Unicode标准的一部分，最初由肯·汤普逊和罗布·派克提出。
          由于较小值的编码点一般使用频率较高，直接使用Unicode编码效率低下，大量浪费内存空间。
          UTF-8就是为了解决向后兼容ASCII码而设计，Unicode中前128个字符（与ASCII码一一对应），
          使用与ASCII码相同的二进制值的单个字节进行编码，这使得原来处理ASCII字符的软件无须或只须做少部分修改，即可继续使用。
          因此，它逐渐成为电子邮件、网页及其他存储或发送文字优先采用的编码方式。</p>
        <p>UTF-8是Unicode的一种变长度的编码表达方式《一般Unicode为双位元组（指UCS2）》，
          它由肯·汤普逊（Ken Thompson）于1992年创建，现在已经标准化为RFC 3629。UTF-8就是以8位为单元对UCS进行编码，
          而UTF-8不使用大尾序和小尾序的形式，每个使用UTF-8存储的字符，除了第一个字节外，其余字节的头两个比特都是以"10"开始，
          使文字处理器能够较快地找出每个字符的开始位置。</p>
        <p>但为了与以前的ASCII码兼容（ASCII为一个字节），因此UTF-8选择了使用可变长度字节来存储Unicode。</p>
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
