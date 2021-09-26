import { createI18n } from "vue-i18n";

const datetimeFormats = {
    "id-ID": {
        chart: {
            month: "long",
        },
        short: {
            hour: "numeric",
            minute: "numeric",
        },
        medium: {
            year: "numeric",
            month: "long",
            day: "numeric",
        },
        long: {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
        },
    },
};

export default createI18n({
    locale: "id",
    fallbackLocale: "id",
    datetimeFormats,
});