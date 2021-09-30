const routes = [{
        path: "/",
        component: () =>
            import ("../layouts/AppLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("../pages/Home.vue"),
            },
            {
                path: "lihat-pengajuan",
                name: "lihat-pengajuan",
                component: () =>
                    import ("../pages/LihatPengajuan.vue"),
            },
            {
                path: "cetak-ktp-el",
                component: () =>
                    import ("../pages/CetakKTP.vue"),
            },
            {
                path: "rekam-ktp-el",
                component: () =>
                    import ("../pages/RekamKTP.vue"),
            },
            {
                path: "kia",
                component: () =>
                    import ("../pages/KIA.vue"),
            },
            {
                path: "akta",
                component: () =>
                    import ("../pages/Akta.vue"),
            },
        ],
    },
    {
        path: "/admin",
        component: () =>
            import ("../layouts/AdminLayout.vue"),
        children: [{
                path: "/admin/dashboard",
                component: () =>
                    import ("../pages/admin/Dashboard.vue"),
            },
            {
                path: "/admin/pengajuan",
                component: () =>
                    import ("../pages/admin/pengajuan/Pengajuan.vue"),
            },
            {
                path: "/admin/pengajuan/:id",
                component: () =>
                    import ("../pages/admin/pengajuan/DetailPengajuan.vue"),
                name: "admin.pengajuan",
            },
            {
                path: "/admin/user",
                component: () =>
                    import ("../pages/admin/user/User.vue"),
                meta: {
                    admin: true,
                },
            },
            {
                path: "/admin/create-user",
                component: () =>
                    import ("../pages/admin/user/CreateUser.vue"),
                meta: {
                    admin: true,
                },
            },
            {
                path: "/admin/edit-user",
                component: () =>
                    import ("../pages/admin/user/EditUser.vue"),
            },
        ],
    },
    {
        path: "/login",
        component: () =>
            import ("../pages/Login.vue"),
        name: "Login",
        meta: {
            login: true,
        },
    },
];

export default routes;