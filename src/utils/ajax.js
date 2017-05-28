// 接口请求

import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'

const log = console.log;

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://dengxiaoying.vicp.io:35200';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

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
    NProgress.start();
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, error => {
    NProgress.done();
    return Promise.reject(error);
});

// 返回响应请求后处理数据
axios.interceptors.response.use(res => {
    NProgress.done();
    return res;
}, error => {
    NProgress.done();
    // if (error.response.status == '403') {
    //     return Promise.resolve(error.response)
    // }
});


export default {
    list(data) {
        return fetch({
            method: 'get',
            url: `/customer/list`,
            data
        })
    }
}