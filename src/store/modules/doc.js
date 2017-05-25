import {
    SET_MENU
} from '../mutation_types';

const log = console.log;

export default {

    state: {
        changeMenu: false
    },

    mutations: {
        [SET_MENU](state, data) {
            state.changeMenu = data;
        }
    },

    actions: {
        SET_MENU({ commit }, data) {
            if (data === undefined) { throw new Error('未设置值'); };
            commit(SET_MENU, data);
        }
    }

};
