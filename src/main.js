// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store'
import Common from './js/rock'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(Vuex)
Common.autoSize()
Common.avInit()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
