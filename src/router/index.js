import Vue from 'vue'
import Router from 'vue-router'
import main from '../views/mainView'
import articleList from '../views/articleList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: articleList
    }
  ]
})
