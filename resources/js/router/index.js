import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store";

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "active",
});

router.beforeEach((to) => {
    if (
        to.matched.some((record) => record.meta.admininstratorLoginRequired) &&
        store.getters.isLoggedIn &&
        store.getters.user.role === "Masyarakat"
    ) {
        return "/redirect";
    }
    if (
        to.matched.some((record) => record.meta.masyarakatLoginRequired) &&
        store.getters.isLoggedIn &&
        store.getters.user.role !== "Masyarakat"
    ) {
        return "/redirect-admin";
    }
    if (
        to.matched.some((record) => record.meta.login) &&
        store.getters.isLoggedIn &&
        store.getters.user.role !== "Masyarakat"
    ) {
        return "/admin/dashboard";
    }
    if (
        to.matched.some((record) => record.meta.admin) &&
        store.getters.isLoggedIn &&
        store.getters.user.role === "Petugas"
    ) {
        return "/admin/dashboard";
    }
    if (
        to.matched.some(
            (record) => record.meta.masyarakatLoginRequired == false
        ) &&
        store.getters.isLoggedIn &&
        store.getters.user.role === "Masyarakat"
    ) {
        return "/";
    }
    if (
        to.matched.some((record) => record.meta.masyarakatLoginRequired) &&
        !store.getters.isLoggedIn
    ) {
        return "/login";
    }
});

export default router;