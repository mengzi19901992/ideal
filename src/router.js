import Vue from 'vue';
import Router from 'vue-router';

import Index from './page/Index/Index.vue';
import Reward from './page/Reward/Reward.vue';
import MyHome from './page/MyHome/MyHome.vue';

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path: '/index',
            name: 'index',
            component: Index,
            meta: {
              title:'首页'
            },
        },
        {
            path: '/reward',
            name: 'reward',
            component: Reward,
            meta: {
              title:'列表'
            },
        },
        {
            path: '/my-home',
            name: 'my-home',
            component: MyHome,
            meta: {
              title:'我的'
            },
        },
    ]
})

router.beforeEach((to,from,next)=>{
    document.title = to.meta.title || '列表';
    next()
})

export default router;