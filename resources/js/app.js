require("./bootstrap");

import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import { setHeaderToken } from "./includes/auth";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import PrimeVue from "primevue/config";
import VCalendar from "v-calendar";
import validation from "./includes/validation";
import ui from "./includes/ui";
import progressBar from "./includes/progress-bar";
import i18n from "./includes/i18n";
import calendar from "./includes/calendar";
import store from "./store";
import Ripple from "primevue/ripple";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import "nprogress/nprogress.css";

window.axios = require("axios");

progressBar(router);

let app;
const token = localStorage.getItem("token");

if (token) {
    setHeaderToken(token);
}

store
    .dispatch("getUser", token)
    .then(() => {
        app = createApp(App).use(i18n);
        app.config.globalProperties.$appState = reactive({
            inputStyle: "outlined",
        });
        app.use(router);
        app.use(ConfirmationService);
        app.use(store);
        app.use(VueViewer);
        app.use(VCalendar);
        app.use(validation);
        app.use(ui);
        app.use(calendar);
        app.use(PrimeVue, { ripple: true });
        app.use(ToastService);
        app.directive("ripple", Ripple);
        app.mount("#app");
    })
    .catch((error) => {
        console.error(error);
    });