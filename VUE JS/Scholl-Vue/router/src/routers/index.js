import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../views/HomePage.vue';
import About from '../views/AboutPage.vue';
import Contect from '../views/ContectPage.vue';
import UserPage from '../views/UserPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contect',
        name: 'Contect',
        component: Contect
    },
    {
        path: '/userpage',
        name: 'UserPage',
        component: UserPage
    }
];


const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;