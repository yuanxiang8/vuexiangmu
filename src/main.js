import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);

Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
