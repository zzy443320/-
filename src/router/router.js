import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/view/Main.vue'),
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/Home.vue')
      },
      {
        path: '/driver',
        name: 'Driver',
        component: () => import('@/view/Driver.vue')
      },
      {
        path: '/fleet',
        name: 'Fleet',
        component: () => import('@/view/Fleet.vue')
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('@/view/Calendar.vue')
      },
      {
        path: '/track',
        name: 'Track',
        component: () => import('@/view/Track.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/Login.vue'),
    redirect: "/login_1",
    children: [
      {
        path: '/login_1',
        name: 'Login_1',
        component: () => import('@/view/Login_1.vue'),
      },
      {
        path: '/login_2',
        name: 'Login_2',
        component: () => import('@/view/Login_2.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router