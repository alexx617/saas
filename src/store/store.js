import Vue from 'vue';
import Vuex from 'vuex';

import homeStore from '@/home/store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        homeStore
    },
    strict: process.env.NODE_ENV !== 'production'
});