<style scoped>
  @import "css/mainView.css";
</style>
<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft"
              leave-active-class="animated fadeOut" mode="out-in">
    <div class="main">
      <div class="banner">
        <div class="mask"></div>
        <div class="triangle-left"></div>
        <div class="triangle-right"></div>
        <div class="welcome">Welcome to my blog</div>
        <div class="name">张裕鑫</div>
      </div>
      <ul class="list">
        <li class="item" @click="toArticleList">
          <div class="name"><span class="text">文章</span></div>
          <div class="detail "><span class="text">爱好由来落笔难，一诗千改始心安</span></div>
        </li>
        <li class="item" @click="toThinkList">
          <div class="name"><span class="text">思绪</span></div>
          <div class="detail "><span class="text">那些思绪，那些勇气，压抑在梦里</span></div>
        </li>
        <li class="item" @click="toExperienceList">
          <div class="name"><span class="text">碎片</span></div>
          <div class="detail "><span class="text">路见不平一声吼，填完这坑继续走</span></div>
        </li>
        <li class="item" @click="toMe">
          <div class="name"><span class="text">我</span></div>
          <div class="detail "><span class="text">我就是我，爱吃肉的小伙</span></div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {}
    },
    components: {},
    computed: {},
    methods: {
      write (i) {
        console.log(i)
      },
      toArticleList () {
        this.$router.push({
          name: 'articleList'
        })
      },
      toExperienceList () {
        this.$router.push({
          name: 'experienceList'
        })
      },
      toThinkList () {
        this.$router.push({
          name: 'thinkList'
        })
      },
      toMe () {
        this.$router.push({
          name: 'myInfo'
        })
      }
    },
    mounted () {
    }
  }
</script>
