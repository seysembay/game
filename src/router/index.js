import {createRouter, createWebHistory} from 'vue-router'
import Settings from "../containers/Settings.vue";
import Play from "../containers/Play.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'settings',
            component: Settings
        },
        {
            path: '/play',
            name: 'play',
            component: Play
        },
    ]
})

export default router