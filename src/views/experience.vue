<style scoped>
  @import "css/content.css";
</style>
<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft"
              leave-active-class="animated fadeOut" mode="out-in">
    <div class="article">
      <div class="title">{{getInfo.title}}</div>
      <div class="info"><span class="author">{{getInfo.author}}</span> <span class="date">{{getInfo.date}}</span></div>
      <div class="content" id="content">
        {{getInfo.content}}
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Common from '../js/rock'
  import marked from 'marked'
  export default{
    data () {
      return {
        info: {
          title: '',
          author: '',
          date: '',
          content: ''
        }
      }
    },
    computed: {
      getInfo () {
        return this.info
      }
    },
    methods: {},
    mounted () {
      let _this = this
      let query = new Common.AV.Query('ExperienceList')
      query.equalTo('id', this.$route.query.id)
      query.find().then(function (results) {
        _this.info.title = results[0].attributes.title
        _this.info.author = results[0].attributes.author
        _this.info.date = results[0].attributes.date
      }, function (error) {
        console.log(error)
      })
      let query2 = new Common.AV.Query('ExperienceContent')
      query2.equalTo('id', this.$route.query.id)
      query2.find().then(function (results) {
        _this.info.content = marked(results[0].attributes.content)
        document.getElementById('content').innerHTML = _this.info.content
      }, function (error) {
        console.log(error)
      })
    }
  }
</script>
