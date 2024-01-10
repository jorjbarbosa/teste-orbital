import { createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Product from '../pages/Product.vue'
import Guard from '../services/middleware.js'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        beforeEnter: Guard.auth
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/product',
        name: 'product',
        component: Product,
        beforeEnter: Guard.auth

    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
