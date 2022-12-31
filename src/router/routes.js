
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/store', component: () => import('pages/store.vue') },
      { path: '/biography', component: () => import('pages/biography') },
      { path: '/about', component: () => import('pages/about.vue') },
      {
        path: '/video',
        component: () => import('pages/video')
      },
      {
        path: '/skills',
        component: () => import('pages/skills')
      },
      {
        path: '/network',
        component: () => import('pages/network')
      },
      {
        path: '/resume',
        component: () => import('pages/resume')
      },
      {
        path: '/education',
        component: () => import('pages/education')
      },
      {
        path: '/experience',
        component: () => import('pages/experience')
      },
      {
        path: '/portfolio',
        component: () => import('pages/portfolio')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
