// 接口请求

import axios from 'axios'
import qs from 'qs'
import utils from '../utils/utils'

const log = console.log;

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

// 拦截器(在发送请求前处理数据)
axios.interceptors.request.use(config => {
    utils.$load();
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, error => {
    utils.$LoadClose();
    return Promise.reject(error);
});

// 拦截器(在返回响应请求后处理数据)
axios.interceptors.response.use(res => {
    utils.$LoadClose();
    return res;
}, error => {
    utils.$LoadClose();
    if (error.response.status == '403') {
        return Promise.resolve(error.response)
    }
});


export default {
    login(data) {
        return fetch({
            method: 'post',
            url: `123`,
            data
        })
    }
}