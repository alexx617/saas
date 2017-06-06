const home = r => require.ensure([], () => r(require('home-components/home')), 'home')
const customer = r => require.ensure([], () => r(require('home-components/customer/customer')), 'customer')
const talk = r => require.ensure([], () => r(require('home-components/talk')), 'talk')
const contract = r => require.ensure([], () => r(require('home-components/contract')), 'contract')
const expenses = r => require.ensure([], () => r(require('home-components/expenses')), 'expenses')

// import contract from 'home-components/contract'

export default {
    router: [
        { path: 'main', name: 'main', component: home }, //首页
        { path: 'customer', name: 'customer', component: customer }, //客户
        { path: 'talk', name: 'talk', component: talk }, //洽谈
        { path: 'contract', name: 'contract', component: contract }, //合同
        { path: 'expenses', name: 'expenses', component: expenses }, //费用
        { path: '', redirect: { name: 'main' } }
    ]
}