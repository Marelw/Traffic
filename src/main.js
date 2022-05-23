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




// Import Bootstrap and BootstrapVue CSS files (order is important)

// Make BootstrapVue available throughout your project
// Optionally install the BootstrapVue icon components plugin