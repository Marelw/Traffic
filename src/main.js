import { createApp } from "vue";
import { createPinia } from "pinia";
import VueTimers from 'vue-timers'

import App from "./App.vue";
import router from "./router";
import './assets/base.scss';
import 'bootstrap';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueTimers);
app.mount("#app");