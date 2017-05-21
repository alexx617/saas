// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import flexible from './utils/flexible'
import utils from './utils/utils'
import iView from 'iview';

import 'iview/dist/styles/iview.css';
import '../src/style/reset.css';
import '../src/style/style.less';
import '../src/style/itheme.less';

Vue.config.productionTip = false

Vue.use(flexible);
Vue.use(iView);

Object.assign(Vue.prototype, utils);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})