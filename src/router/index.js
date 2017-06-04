import Vue from 'vue'
import VueRouter from 'vue-router'
import homeView from '@/home/main'
import homeRouter from '@/home/router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: "home-main",
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