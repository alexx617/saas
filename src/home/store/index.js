import ajax from 'utils/ajax';

// 保证mutation的唯一性
const SET_MENU = 'SET_MENU'; // 右侧拉出栏
const SET_COMPONENT = 'SET_COMPONENT'; // 拉出栏显示哪个子组件
const GET_CUSTOMER = 'GET_CUSTOMER'; // 

export default {
    namespaced: true,

    state: {
        changeMenu: false,
        listData: {
            showList: null,
            data: {}
        },
        customerList:{}//客户列表
    },

    mutations: {
        [SET_MENU](state, data) {
            state.changeMenu = data;
        },
        [SET_COMPONENT](state, data) {
            state.listData.showList = data[0];
            state.listData.data = data[1];
        },
        [GET_CUSTOMER](state, data) {
            state.customerList = data;
        },
    },

    actions: {
        SET_MENU({ commit }, data) {
            if (data === undefined) { throw new Error('SET_MENU未设置值') };
            commit(SET_MENU, data);
        },
        SET_COMPONENT({ commit }, data) {
            if (data.length < 2) { throw new Error('SET_COMPONENT未设置值') };
            commit(SET_COMPONENT, data);
        },
        GET_CUSTOMER({ commit }) {
            let form = {//客户列表分页
                page:0,
                size:10
            }
            ajax.customer_List(form)
			.then(rs => {
				if (rs.success) {
                    commit(GET_CUSTOMER, rs.data);
				} else {
					this.$tip(rs.message);
				};
			})
			.catch(error => {
				this.$tip('请稍候重试');
			});
        }

        
    }
}