<style scoped>
  @import "css/add.css";
</style>
<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft"
              leave-active-class="animated fadeOut" mode="out-in">
    <div class="add">
      <input type="text" class="title" v-model="info.title" placeholder="标题">
      <textarea name="content" id="content" v-model="info.content" class="content" cols="30" rows="10"></textarea>

      <div class="submit" @click="createExperience">提交</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Common from '../js/rock'
  export default{
    data () {
      return {
        info: {
          title: '',
          author: 'Bruce Zhang',
          date: '',
          content: ''
        }
      }
    },
    computed: {},
    methods: {
      createExperience () {
        let _this = this
        if (_this.info.content.length === 0 || _this.info.title.length === 0) {
          console.log('return')
          return
        }
        let ExperienceList = Common.AV.Object.extend('ExperienceList')
        let obj = new ExperienceList()
        let newId = new Date().getTime().toString()
        obj.set('id', newId)
        obj.set('title', _this.info.title)
        obj.set('author', _this.info.author)
        obj.set('detail', '')
        obj.set('date', new Date().getDate().toString())
        obj.save().then(function (todo) {
          console.log('objectId is ' + todo.id)
          let ExperienceContent = Common.AV.Object.extend('ExperienceContent')
          let obj = new ExperienceContent()
          obj.set('id', newId)
          obj.set('content', _this.info.content)
          obj.save().then(function (todo) {
            console.log('objectId is ' + todo.id)
          }, function (error) {
            console.error(error)
          })
        }, function (error) {
          console.error(error)
        })
      }
    },
    mounted () {
    }
  }
</script>
