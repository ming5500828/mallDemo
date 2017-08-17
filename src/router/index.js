import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/page/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
