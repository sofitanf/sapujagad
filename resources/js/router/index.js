import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store";

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "active",
});

router.beforeEach(async(to, from, next) => {
    if (
        to.matched.some((record) => record.meta.login) &&
        store.getters.isLoggedIn
    ) {
        next("/admin/dashboard");
    }
    if (
        to.matched.some((record) => record.meta.admin) &&
        store.getters.isLoggedIn &&
        store.getters.user.role === "Petugas"
    ) {
        next("/admin/dashboard");
    }
    if (
        to.matched.some((record) => record.meta.masyarakatLogin) &&
        store.getters.isLoggedIn
    ) {
        next("/");
    }
    if (
        to.matched.some((record) => record.meta.admininstrator) &&
        store.getters.isLoggedIn &&
        store.getters.user.role === "Masyarakat"
    ) {
        next("/redirect");
    }
    if (
        to.matched.some((record) => record.meta.masyarakat) &&
        !store.getters.isLoggedIn
    ) {
        next("/login");
    }
    if (
        to.matched.some((record) => record.meta.masyarakat) &&
        store.getters.isLoggedIn &&
        store.getters.user.role !== "Masyarakat"
    ) {
        next("/redirect-admin");
    }
    next();
});

export default router;