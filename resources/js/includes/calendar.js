import { SetupCalendar, DatePicker } from "v-calendar";

export default {
    install(app) {
        app.use(SetupCalendar, {});
        // Use the components
        app.component("DatePicker", DatePicker);
    },
};