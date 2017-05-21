import Vue from 'vue'
import VueRouter from 'vue-router'
import customer from '@/components/customer'
import home from '@/components/home'
import talk from '@/components/talk'
import customerMenu from '@/components/customer-menu'

Vue.use(VueRouter)

const routes = [{
        path: '/',
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
        path: '/customerMenu',
        name: 'customerMenu',
        component: customerMenu
    },
    {
        path: '*',
        redirect: '/'
    }
]
const router = new VueRouter({ routes });

export default router;