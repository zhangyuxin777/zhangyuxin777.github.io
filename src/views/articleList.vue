<style scoped>
  @import "css/articleList.css";
</style>
<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft"
              leave-active-class="animated fadeOut" mode="out-in">
    <div class="article-list">
      <ul class="list">
        <li class="item" v-for="(item,index) in list" @click="toArticle">
          <div class="title">{{item.attributes.title}}</div>
          <div class="info"><span class="author">{{item.attributes.author}}</span> / <span class="date">{{item.attributes.date}}</span>
          </div>
          <div class="detail">{{item.attributes.detail}}</div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Common from '../js/rock'
  export default{
    data () {
      return {
        infoList: []
      }
    },
    computed: {
      list () {
        return this.infoList
      }
    },
    methods: {
      toArticle () {
        this.$router.push({
          name: 'singerContent',
          query: {id: this.$store.state.search.zhida.mid}
        })
      }
    },
    mounted () {
      let _this = this
      let query = new Common.AV.Query('ArticleList')
      query.limit(1000)
      query.find().then(function (results) {
        _this.infoList = results
        console.log(_this.infoList[0])
      }, function (error) {
        console.log(error)
      })
    }
  }
</script>
