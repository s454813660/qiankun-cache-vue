import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import router from './router';
import { routes } from './router/routes'
// import { routes } from './router';
Vue.config.productionTip = false

Vue.use(VueRouter);

let instance = null;
let router = null;
/* eslint-disable */ 
function render(props) {
  router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
  });
  if (window.__POWERED_BY_QIANKUN__ && window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__) {
    const cachedInstance = window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__;
    debugger;
    // 从最初的Vue实例上获得_vnode
    const cachedNode =
      // (cachedInstance.cachedInstance && cachedInstance.cachedInstance._vnode) ||
      cachedInstance._vnode;

    // 让当前路由在最初的Vue实例上可用
    router.apps.push(...cachedInstance.$router.apps);

    instance = new Vue({
      router,
      render: () => cachedNode
    });

    // 缓存最初的Vue实例
    instance.cachedInstance = cachedInstance;

    router.onReady(() => {
      const { path } = router.currentRoute;
      const { path: oldPath } = cachedInstance.$router.currentRoute;
      // 当前路由和上一次卸载时不一致，则切换至新路由
      if (path !== oldPath) {
        cachedInstance.$router.push(path);
      }
    });
    instance.$mount('#app');
  } else {
    // 正常实例化
    instance = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
}
if(window.__POWERED_BY_QIANKUN__) {  // 动态添加publicPath
   /* eslint-disable */ 
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}


if(!window.__POWERED_BY_QIANKUN__){ // 默认独立运行
  render();
}
// 子组件的协议就OK了
export async function bootstrap() {

};

export async function mount(props) {
  console.log(props);
  render(props);
};

export async function unmount() {
  console.log('[vue] vue app unmount');
  const cachedInstance = instance.cachedInstance || instance;
  window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__ = cachedInstance;
  const cachedNode = cachedInstance._vnode;
  cachedNode.data.keepAlive = true;
  cachedNode.data.hook.destroy(cachedNode);
  if (instance.cachedInstance) {
    instance.$destroy();
    instance = null;
  }
  router = null;
};
