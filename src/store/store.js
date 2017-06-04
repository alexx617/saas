import Vue from 'vue';
import Vuex from 'vuex';
// import doc from './modules/doc';

import homeStore from '@/home/store'
// import accountStore from '@/account/store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        // doc,
        homeStore
    },
    strict: process.env.NODE_ENV !== 'production'
});
