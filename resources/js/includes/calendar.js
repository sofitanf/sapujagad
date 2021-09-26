import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

export default {
    install(app) {
        app.use(SetupCalendar, {});
        // Use the components
        app.component("Calendar", Calendar);
        app.component("DatePicker", DatePicker);
    },
};