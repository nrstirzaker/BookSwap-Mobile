import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // Direct redirect to the actual child path or route name
  {
    path: '/',
    redirect: { name: 'login' },
  },

  // Auth Routes
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'login' },
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/LoginPage.vue'),
        meta: { requiresGuest: true },
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('pages/SignUpPage.vue'),
        meta: { requiresGuest: true },
      },
    ],
  },

  // Main App Routes
  {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
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
        props: true,
      },
    ],
  },

  // Standalone Aliases (Only for convenience)
  { path: '/login', redirect: '/auth/login' },
  { path: '/signup', redirect: '/auth/signup' },
  { path: '/home', redirect: '/app' },

  // Catch-all 404
  {
    path: '/:catchAll(.*)*',
    name: 'not-found',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
