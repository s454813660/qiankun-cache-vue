let prefix = window.__POWERED_BY_QIANKUN__ ? '/child0/' : '/';

export const routes = [
  {
    path: prefix === '/' ? prefix : prefix.substring(0, prefix.length-1),
    name: 'Home',
    component: () => import(/* webpackChunkName: "components" */ '../views/Components.vue')
  },
  {
    path: prefix + 'detail',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  },
]