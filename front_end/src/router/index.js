import Vue from 'vue'
import Router from 'vue-router'
import AppVue from '@/App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: AppVue,
    },
  ],
})
