import Vue from 'vue'
import Router from 'vue-router'
import main from '../views/mainView'
import articleList from '../views/articleList'
import article from '../views/article'
import experienceList from '../views/experienceList'
import experience from '../views/experience'
import addExperience from '../views/addExperience'
import thinkList from '../views/thinkList'
import myInfo from '../views/myInfo'
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
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/addExperience',
      name: 'addExperience',
      component: addExperience
    },
    {
      path: '/experienceList',
      name: 'experienceList',
      component: experienceList
    },
    {
      path: '/experience',
      name: 'experience',
      component: experience
    },
    {
      path: '/thinkList',
      name: 'thinkList',
      component: thinkList
    },
    {
      path: '/myInfo',
      name: 'myInfo',
      component: myInfo
    }
  ]
})
