import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页'
    },
    // beforeEnter: (to,from,next) => {
    //   console.log('我是大帅哥！')
    //   next()
    // },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '关于'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//前置钩子（hook）,（前置守卫）
router.beforeEach((to,from,next) => {
  // console.log(to)
  // console.log('++++++++')
  next()
  document.title = to.matched[0].meta.title
})

//后置钩子(hook)
router.afterEach((to,from) => {
  // console.log('---------')
})

export default router
