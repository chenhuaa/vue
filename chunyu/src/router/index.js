import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FindDoctor from '@/views/findDoctor'
import Fast from '@/views/fast'

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
    },
    {
      path: '/fast',
      name: 'Fast',
      component: Fast
    }
  ]
})
