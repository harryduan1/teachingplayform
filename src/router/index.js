import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
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
  // next()
  // document.title = to.matched[0].meta.title
})

//后置钩子(hook)
router.afterEach((to,from) => {
  // console.log('---------')
})

export default router
