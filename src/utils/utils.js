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


}