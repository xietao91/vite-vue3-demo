import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '',
        component: ()=> import('@/views/todoList/index.vue')
    },
    // {
    //     path: '/threeJs',
    //     name: 'ThreeJs',
    //     component: () => import('../App.vue')
    // }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})