//import { getVNodeBlockHelper } from "@vue/compiler-core";

import { createRouter, createWebHistory } from "vue-router";
//import Router from 'vue-router'

import Quiz from '../views/Quiz.vue'
import Trafikinformation from '../views/Trafikinformation.vue'

const routes = [{
        path: '/quiz',
        name: 'quiz',
        component: Quiz
    },
    {
        path: '/trafikinformation',
        name: 'trafikinformation',
        component: Trafikinformation
    }
]

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})

export default router;

// export default new Router({
//     mode: 'history',
//     history: createWebHistory(
//         import.meta.env.BASE_URL),
//     routes
// })