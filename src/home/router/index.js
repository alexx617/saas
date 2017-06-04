import customer from 'home-components/customer/customer'
import home from 'home-components/home'
import talk from 'home-components/talk'
import contract from 'home-components/contract'
import expenses from 'home-components/expenses'

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