import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePageTitle from "vue-page-title";

Vue.use(VueRouter)
Vue.use(VuePageTitle, {
  suffix: ' - QKTool'
})

const routes = [
  {
    path: '/',
    name: 'Home',
    component() {
      return import('../views/Home.vue')
    },
  },
  {
    path: '/notes',
    name: 'Notes',
    component() {
      return import('../views/Notes.vue')
    },
  },
  {
    path: '/works',
    name: 'Works',
    component() {
      return import('../views/Works.vue')
    },
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    },
  },


  {
    path: '/works/GuessNumber',
    name: 'GuessNumber',
    component: function () {
      return import('../views/works/GuessNumber.vue')
    },
  },
  {
    path: '/works/So',
    name: 'So',
    component: function () {
      return import('../views/works/So.vue')
    }
  },
  {
    path: '/works/BDHConverter',
    name: 'BDHConverter',
    component: function () {
      return import('../views/works/BDHConverter.vue')
    }
  },


  // 新的页面路由加在这条注释上面，即必须放在404前面
  {
    path: '*',
    name: 'Err404',
    component: function () {
      return import('../views/Err404.vue')
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


export default router
