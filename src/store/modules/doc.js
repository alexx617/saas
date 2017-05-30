import {
    SET_MENU,
    SET_COMPONENT,
} from '../mutation_types';

const log = console.log;

export default {

    state: {
        changeMenu: false,
        listData: {
            showList: null,
            data: {}
        }
    },

    mutations: {
        [SET_MENU](state, data) {
            state.changeMenu = data;
        },
        [SET_COMPONENT](state, data) {
            state.listData.showList = data[0];
            state.listData.data = data[1];
        }
    },

    actions: {
        SET_MENU({ commit }, data) {
            if (data === undefined) { throw new Error('SET_MENU未设置值'); };
            commit(SET_MENU, data);
        },
        SET_COMPONENT({ commit }, data) {
            if (data.length < 2) { throw new Error('SET_COMPONENT未设置值'); };
            commit(SET_COMPONENT, data);
        }
    }

};