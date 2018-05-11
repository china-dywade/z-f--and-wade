import Vue from 'vue'
import Router from 'vue-router'
import all from '../allProduct'
import ppzb from '../ppzb'
import jzmd from '../jzmd'
import home from '../home'
import myyh from '../mysale'
import shserver from '../shsevice'
import address from '../address'
import userinfo from '../userinfo'
import myorder from '../myorder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      name: 'all',
      component: all
    },
    {
      path: '/ppzb',
      name: ' ppzb',
      component:  ppzb
    },
    
    {
      path: '/jzmd',
      name: 'jzmd',
      component: jzmd
    },
    {
      path: '/home',
      name: ' home',
      component:  home
    },
    {
      path: '/myorder',
      name: ' myorder',
      component:  myorder
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/shserver',
      name: 'shserver',
      component: shserver
    },
    {
      path: '/myyh',
      name: 'myyh',
      component: myyh
    }
  ]
})
