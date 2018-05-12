import Vue from 'vue'
import Router from 'vue-router'
import all from '../breadNav/allProduct'
import ppzb from '../breadNav/ppzb'
import jzmd from '../breadNav/jzmd'
import home from '../breadNav/home'
import myyh from '../settings/mysale'
import shserver from '../settings/shsevice'
import address from '../settings/address'
import userinfo from '../settings/userinfo'
import myorder from '../settings/myorder'
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
