import {
    SET_RESETHEADER
} from '../mutation_types';

export default {

    state: {
        header: {
            title: 'Itaú Cartões'
        }
    },

    mutations: {
        [SET_RESETHEADER] (state) {
            state.header = {
                title: 'Itaú Cartões'
            };
        }
    },

    actions: {
        SET_RESETHEADER ({ commit }) {
            if (data.showHeader === undefined) { throw new Error('头部设置格式不正确'); };
            commit(SET_RESETHEADER);
        }
    }

};
