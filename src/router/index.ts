import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: "btn-active",
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AppHome.vue')
    },
    {
      path: '/history',
      name: 'joblist',
      component: () => import('../views/JobList.vue')
    },
    {
      path: '/create_job',
      name: 'jobcreate',
      component: () => import('../views/JobCreate.vue')
    },
    {
      path: '/view_job/:id',
      name: 'jobview',
      component: () => import('../views/JobView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutSwitchBox.vue')
    }
  ]
})

export default router
