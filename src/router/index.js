import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/components/index.vue'
import mima from '@/components/mima.vue'
import shouye from '@/components/shouye.vue'
import fenlei from '@/views/fenlei.vue'
import vip from '@/views/vip.vue'
import wode from '@/views/wode.vue'
import shou from '@/views/shou.vue'
import shengji from '@/views/shengji.vue'
import fankui from '@/views/fankui.vue'
Vue.use(VueRouter)

  const routes = [

  {
    path: '/index',
    name: 'index',
    component: index
  },{
    path: '/mima',
    name: 'mima',
    component: mima
  },{
    path: '/',
    name: 'shouye',
    component: shouye
  },{
    path: '/fenlei',
    name: 'fenlei',
    component: fenlei
  },{
    path: '/vip',
    name: 'vip',
    component: vip
  },{
    path: '/wode',
    name: 'wode',
    component: wode
  },{
    path: '/shou',
    name: 'shou',
    component: shou
  },{
    path: '/shengji',
    name: 'shengji',
    component: shengji
  },{
    path: '/fankui',
    name: 'fankui',
    component: fankui
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
