// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import flexible from 'utils/flexible'
import utils from 'utils/utils'
import iView from 'iview';
import store from 'store/store';

import 'mock/index.js';

import 'iview/dist/styles/iview.css';
import 'styles/reset.css';
import 'styles/style.less';
import 'styles/theme.less';

Vue.config.productionTip = false

Vue.use(flexible);
Vue.use(iView);

Object.assign(Vue.prototype, utils);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})