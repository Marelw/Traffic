import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());

app.use(router);
app.mount("#app");

/*
new Vue ({
    router,
    render: function (h) { return h (App)}
}).$mount('#app')
*/