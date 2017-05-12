<style scoped>
  @import "css/mainView.css";
</style>
<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft"
              leave-active-class="animated fadeOut" mode="out-in">
    <div class="main">
      <div class="banner"></div>
      <ul class="list">
      <li class="item" @click="toArticleList">
      <div class="title t1"><span class="text">文章</span></div>
      <div class="cont c1"><span class="text">文章</span></div>
      </li>
      <li class="item" @click="toThinkList">
      <div class="title t2"><span class="text">思维</span></div>
      <div class="cont c2"><span class="text">文章</span></div>
      </li>
      <li class="item" @click="toExperienceList">
      <div class="title t3"><span class="text">填坑</span></div>
      <div class="cont c3"><span class="text">文章</span></div>
      </li>
      <li class="item">
      <div class="title t4"><span class="text">我</span></div>
      <div class="cont c4"><span class="text">文章</span></div>
      </li>
      </ul>
      <!--<div class="top" @click="write(1)"></div>-->
      <!--<div class="right" @click="write(2)"></div>-->
      <!--<div class="left" @click="write(3)"></div>-->
      <!--<div class="bottom" @click="write(4)"></div>-->
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
      }
    },
    mounted () {
    }
  }
</script>
