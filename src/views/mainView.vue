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
          <div class="title"><span class="text">文章</span></div>
          <div class="cont"><span class="text">文章</span></div>
        </li>
        <li class="item" @click="toThinkList">
          <div class="title"><span class="text">思维</span></div>
        </li>
        <li class="item" @click="toExperienceList">
          <div class="title"><span class="text">填坑</span></div>
        </li>
        <li class="item">
          <div class="title"><span class="text">我</span></div>
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
