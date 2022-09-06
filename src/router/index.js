import { createRouter, createWebHashHistory } from 'vue-router';
import todoList from '../views/todoList/index.vue'

const routes = [
    {
        path: '/',
        name: '',
        component: todoList
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