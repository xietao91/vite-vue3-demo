import { createRouter, createWebHashHistory } from 'vue-router';

const views = import.meta.glob('@/views/**/*.vue')
console.log(views);

const routes = [
    {
        path:'/',
        redirect:'/todoList'
    },
    {
        path: '/todoList',
        name: 'TodoList',
        component: ()=> import('@/views/todoList/index.vue')
    },
    {
        path: '/threeJsDemo',
        name: 'ThreeJsDemo',
        component: () => import('@/views/threeJsDemo/index.vue')
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})