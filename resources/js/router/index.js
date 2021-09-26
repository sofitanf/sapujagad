import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store";

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "active",
});

router.beforeEach(async(to, from, next) => {
    // if (
    //     to.matched.some((record) => record.meta.requiresAuth) &&
    //     !store.getters.isLoggedIn
    // ) {
    //     next("/login");
    // }
    if (
        to.matched.some((record) => record.meta.login) &&
        store.getters.isLoggedIn
    ) {
        next("/admin/dashboard");
    }
    if (
        to.matched.some((record) => record.meta.admin) &&
        store.getters.user.role === "Petugas"
    ) {
        next("/admin/dashboard");
    }
    next();
});

export default router;