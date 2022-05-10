//import { getVNodeBlockHelper } from "@vue/compiler-core";

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizView.vue";
import TrafficView from "@/views/TrafficView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "HomeView", component: HomeView },
        { path: "/quizview", name: "QuizView", component: QuizView },
        { path: "/trafficview", name: "TrafficView", component: TrafficView },
    ],
})


export default router;