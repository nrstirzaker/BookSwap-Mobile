import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // 1. Initial Screen when opening the app (Login/Sign Up)
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('pages/SignUpPage.vue'),
  },

  // 2. Main Application pages inside MainLayout
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'add',
        name: 'add-book',
        component: () => import('pages/AddBookPage.vue'),
      },
      {
        path: 'bookswap/:id',
        name: 'swap-details',
        component: () => import('pages/SwapDetails.vue'),
      },
      {
        path: 'saved',
        name: 'saved',
        component: () => import('pages/IndexPage.vue'), // Need to replace with your SavedPage.vue when ready
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('pages/IndexPage.vue'), // Need to replace with your ProfilePage.vue when ready
      },
    ],
  },

  // 3. Catch-all 404
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
