import nProgress from "nprogress";

export default (router) => {
    router.beforeEach((to, from, next) => {
        window.scrollTo(0, 0);
        nProgress.start();
        next();
    });

    router.afterEach(nProgress.done);
};