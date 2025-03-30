import { createRouter, createWebHashHistory } from 'vue-router';

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: () => import('@/views/MainLayout.vue'), // 懶加載
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue'), // 懶加載
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'), // 懶加載
    },
  ]
});

export default routes;