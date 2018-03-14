import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FindDoctor from '@/views/findDoctor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/find-doctor',
      name: 'FindDoctor',
      component: FindDoctor
    }
  ]
})
