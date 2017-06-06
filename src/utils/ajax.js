// 接口请求

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import iView from 'iview'

Vue.use(iView);

const log = console.log;

axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://dengxiaoying.vicp.io:35200';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

export function fetch(opt) {
    var dataList = {
        method: opt.method,
        url: opt.url,
    }
    opt.method == 'post' ? dataList.data = opt.data : dataList.params = opt.data;
    return new Promise((resolve, reject) => {
        axios(dataList)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

// 发送请求前处理数据
axios.interceptors.request.use(config => {
    iView.LoadingBar.start()
        // if (config.method === 'post') {
        //     config.data = qs.stringify(config.data);
        // }
    return config;
}, error => {
    iView.LoadingBar.finish();
    return Promise.reject(error);
});

// 返回响应请求后处理数据
axios.interceptors.response.use(res => {
    iView.LoadingBar.finish();
    return res;
}, error => {
    iView.LoadingBar.finish();
    if (error.response.status == '400') {
        return Promise.resolve(error.response)
    }
});


export default {
    //客户 主页 initList和查询
    customer_List(data) {
        return fetch({
            method: 'get',
            url: `/api/customer/list`,
            data
        })
    },
    //客户 拉出框 基本信息
    customer_Basic(data) {
        return fetch({
            method: 'get',
            url: `/api/customer/${data.id}`,
        })
    },
    //客户 主页 获取select
    customer_Select(data) {
        return fetch({
            method: 'get',
            url: `/api/customer/listInitData`,
        })
    },
    //客户 拉出框 新增客户 获取select
    customer_Add(data) {
        return fetch({
            method: 'get',
            url: `/api/customer/formInitData`,
        })
    },
    //客户 拉出框 新增客户 保存数据
    customer_AddSave(data) {
        return fetch({
            method: 'post',
            url: `/api/customer`,
            data
        })
    }
}