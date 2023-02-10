import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mountFontAwesome from "@/fontAwesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

mountFontAwesome();
app.component("fa-icon", FontAwesomeIcon).mount("#app");
