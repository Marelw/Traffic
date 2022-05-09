import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizView.vue";
import TrafficView2 from "@/views/TrafficView2.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "HomeView", component: HomeView },
        { path: "/quizview", name: "QuizView", component: QuizView },
        { path: "/trafficview2", name: "TrafficView2", component: TrafficView2 },
    ],
})


export default router;