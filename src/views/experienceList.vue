<style scoped>
  @import "css/list.css";
</style>
<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft"
              leave-active-class="animated fadeOut" mode="out-in">
    <div class="list-box">
      <ul class="list">
        <li class="item" v-for="(item,index) in list" @click="toArticle(item.attributes.id)">
          <div class="con">
            <div class="title">{{item.attributes.title}}</div>
            <div class="info"><span class="author">{{item.attributes.author}}</span> / <span class="date">{{item.attributes.date}}</span>
            </div>
            <div class="detail">{{item.attributes.detail}}</div>
          </div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Common from '../js/rock'
  import {mapState} from 'vuex'
  export default{
    data () {
      return {}
    },
    computed: {
      ...mapState({
        list: state => state.experience.list
      })
    },
    methods: {
      toArticle (id) {
        sessionStorage.setItem('experienceListScrollTop', document.body.scrollTop)
        this.$router.push({
          name: 'experience',
          query: {id: id}
        })
      }
    },
    mounted () {
      let _this = this
      let query = new Common.AV.Query('ExperienceList')
      query.limit(1000)
      query.find().then(function (results) {
        _this.$store.dispatch('addExperienceList', results)
      }, function (error) {
        console.log(error)
      })

      setTimeout(function () {
        document.body.scrollTop = parseFloat(sessionStorage.getItem('experienceListScrollTop'))
      }, 200)
    }
  }
</script>
