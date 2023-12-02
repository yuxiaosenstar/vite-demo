import { createRouter, createWebHistory } from 'vue-router'

// 路由列表
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/homePage.vue'),
  },
]

// 导出路由
export default createRouter({
  history: createWebHistory(),
  routes,
})
