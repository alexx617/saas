import Vue from 'vue'
import VueRouter from 'vue-router'
// import customer from '@/components/customer/customer'
// import home from '@/components/home'
// import talk from '@/components/talk'
// import contract from '@/components/contract'
// import expenses from '@/components/expenses'
import homeView from '@/home/main.vue'
import homeRouter from '@/home/router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        component: homeView,
        children: homeRouter.router
    }, //首页

    {
        path: '*',
        redirect: '/home'
    }
]

const router = new VueRouter({ routes });

export default router;