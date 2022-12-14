import { createRouter, createWebHashHistory } from 'vue-router';

const views = import.meta.glob('@/views/**/*.vue')
console.log(views);

const routes = [
    {
        path: '/',
        redirect: '/todoList'
    },
    {
        path: '/todoList',
        name: 'TodoList',
        component: () => import('@/views/todoList/index.vue')
    },
    {
        path: '/threeJsDemo',
        name: 'ThreeJsDemo',
        component: () => import('@/views/threeJsDemo/index.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/test/index.vue')
    },
    {
        path: '/eCharts',
        name: 'ECharts',
        component: () => import('@/views/eChartsDemos/index.vue')
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})