import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "@/views/HomeScreen.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "HomeScreen", component: HomeScreen }],
});

export default router;
