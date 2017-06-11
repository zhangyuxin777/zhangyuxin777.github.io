<style scoped>
  @import "css/myInfo.css";
</style>
<template>
  <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft"
              leave-active-class="animated fadeOut" mode="out-in">
    <div class="my-info">
      <div class="building"></div>
      <div class="text">建设中</div>
      <div class="email">联系方式: bruce777@foxmail.com</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {}
    },
    computed: {},
    methods: {},
    mounted () {

    }
  }
</script>
