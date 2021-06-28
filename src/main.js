import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import router from './router';
import store from './store/store'

Vue.config.productionTip = false

import { get, post } from './common/network/network';
Vue.prototype.$http = { get, post }

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
