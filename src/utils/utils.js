// 通用插件方法

import router from '../router';

export default {
    // 页面跳转
    $go: function (page, query) {
        let parentPath = /\/(.+)\//g.exec(router.currentRoute.path);
        page = parentPath ? parentPath[0] + page : ""
        let route = { path: page };
        if (query) {
            route.query = query;
        }
        router.push(route);
    },

    // 无记录页面跳转
    $goRep: function (page) {
        router.replace(page);
    },

    $tip: function (msg) {
        this.$Notice.warning({
            title: '提醒',
            desc: msg
        });
    },

    // 关闭拉出框
    $closePullBox: function () {
        this.$store.dispatch('homeStore/SET_MENU', false)
        console.log('111111')
    },

    $true: function (msg) {
        this.$Notice.success({
            title: '成功',
            desc: msg
        });
    }

}