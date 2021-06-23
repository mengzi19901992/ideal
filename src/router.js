import Vue from 'vue';
import Router from 'vue-router';

import Index from './page/Index/Index.vue';

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
              title:'首页'
            },
        },
    ]
})

export default router;