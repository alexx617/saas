// 通用插件方法

import router from '../router';

export default {
    // 页面跳转
    $go: function(page, query) {
        let route = { path: page };
        if (query) {
            route.query = query;
        }
        router.push(route);
    },

    // 无记录页面跳转
    $goRep: function(page) {
        router.replace(page);
    },

    $tip: function(msg) {
        this.$Notice.warning({
            title: '提醒',
            desc: msg
        });
    },

    // 关闭拉出框
    $closePullBox: function() {
        this.$store.dispatch('SET_MENU', false)
    }


}