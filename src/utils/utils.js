/*
 * @Author: Alex 
 * @Date: 2017-05-16 11:10:49 
 * @Last Modified by: Alex
 * @Last Modified time: 2017-05-19 15:05:22
 */

import router from '../router';
import { Loading } from 'element-ui';
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

    $tip: function(message) {
        this.$notify.error({
            message: message
        });
    },

    $alertBox: function(message, page) {
        this.$msgbox({
            title: 'Nota',
            message: message,
            confirmButtonText: 'OK',
            callback: action => {
                if (page) {
                    this.$goRep(page)
                }
            }
        });
    },

    $load: function() {
        Loading.service();
    },

    $LoadClose: function() {
        let loadingInstance = Loading.service();
        loadingInstance.close();
    }

}