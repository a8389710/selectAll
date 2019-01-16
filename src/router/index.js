import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Buycar from '@//components/buycar'
import Home from '@//components/home'
import Tabs from '@/components/tabs'
import Danmu from '@/components/danmu'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/buycar',
      name: 'burcar',
      component: Buycar
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },    
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs
    },   
    {
      path: '/danmu',
      name: 'danmu',
      component: Danmu
    }, 
  ]
})
