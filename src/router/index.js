import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizView.vue";
import TrafficView from "@/views/TrafficView.vue";
import AboutView from "@/views/AboutView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "HomeView", component: HomeView },
        { path: "/quizview", name: "QuizView", component: QuizView },
        { path: "/trafficview", name: "TrafficView", component: TrafficView },
        { path: "/aboutview", name: "AboutView", component: AboutView}
    ],
})


export default router;