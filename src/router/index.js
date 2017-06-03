import Vue from 'vue'
import VueRouter from 'vue-router'
import customer from '@/components/customer/customer'
import home from '@/components/home'
import talk from '@/components/talk'
import contract from '@/components/contract'
import expenses from '@/components/expenses'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: home }, //首页
    { path: '/customer', name: 'customer', component: customer }, //客户
    { path: '/talk', name: 'talk', component: talk }, //洽谈
    { path: '/contract', name: 'contract', component: contract }, //合同
    { path: '/expenses', name: 'expenses', component: expenses }, //费用
    { path: '*', redirect: '/' }
]

const router = new VueRouter({ routes });

export default router;