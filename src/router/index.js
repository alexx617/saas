import Vue from 'vue'
import VueRouter from 'vue-router'
import customer from '@/components/customer'
import customerList from '@/components/customerList'
import home from '@/components/home'
import talk from '@/components/talk'
import contract from '@/components/contract'

Vue.use(VueRouter)

const routes = [{
        path: '/customer',
        name: 'customer',
        component: customer
    },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/talk',
        name: 'talk',
        component: talk
    },
    {
        path: '/contract',
        name: 'contract',
        component: contract
    },
    {
        path: '/customerList',
        name: 'customerList',
        component: customerList
    },
    {
        path: '*',
        redirect: '/'
    }
]
const router = new VueRouter({ routes });

export default router;