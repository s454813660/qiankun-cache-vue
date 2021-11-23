import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
let prefix = window.__POWERED_BY_QIANKUN__ ?  '/child1/' : '/';

export const routes = [
  {
    path: prefix + 'home',
    name: 'Home',
    component:  () =>
    import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: prefix + 'about',
    name: 'About',
    component:  () =>
    import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;