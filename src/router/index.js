import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Home from 'components/home'
// import Hello from 'components/hello'
const Home = () => import('components/Home')
const Hello = () => import('components/Hello')
const User = () => import('components/User')
const HomeMessage = () => import('components/HomeMessage')
const HomeNews = () => import('components/HomeNews')

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'message'
        },
        {
          path: 'message',
          component: HomeMessage
        },{
          path: 'news',
          component: HomeNews
        }
      ]
    },
    {
      path: '/hello',
      component: Hello
    },{
      path: '/user/:userId',
      component: User
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
  next()
  // document.title = to.matched[0].meta.title
})

//后置钩子(hook)
router.afterEach((to,from) => {
  // console.log('---------')
})

export default router
