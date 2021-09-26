export default {
    methods: {
        badgeClass(badge) {
            if (badge === "Terkirim") {
                return "info";
            } else if (badge === "Selesai") {
                return "success";
            } else if (badge === "Ditolak") {
                return "danger";
            } else if (badge === "Diproses") {
                return "warning";
            }
        },
    },
};