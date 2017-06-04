import customer from '../components/customer/customer.vue'
import home from '../components/home.vue'
import talk from '../components/talk.vue'
import contract from '../components/contract.vue'
import expenses from '../components/expenses.vue'

export default {
    router: [
        { path: 'main', name: 'main', component: home }, //首页
        { path: 'customer', name: 'customer', component: customer }, //客户
        { path: 'talk', name: 'talk', component: talk }, //洽谈
        { path: 'contract', name: 'contract', component: contract }, //合同
        { path: 'expenses', name: 'expenses', component: expenses }, //费用
        { path: '*', redirect: { name: 'main' } }
    ]
}