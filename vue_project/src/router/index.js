import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Detail from '@/components/Detail'
import TestProvinceCity from '@/components/TestProvinceCity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: '/testprovincecity',
      name: 'TestProvinceCity',
      component: TestProvinceCity,
      alias: '/testpc'
    }
  ]
})
