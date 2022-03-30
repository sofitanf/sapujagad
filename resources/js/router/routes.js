const routes = [{
        path: "/redirect",
        component: () =>
            import ("../pages/Administrator.vue"),
    },
    {
        path: "/redirect-admin",
        component: () =>
            import ("../pages/Masyarakat.vue"),
    },
    {
        path: "/",
        component: () =>
            import ("../layouts/AppLayout.vue"),
        children: [{
                path: "/",
                component: () =>
                    import ("../pages/Home.vue"),
            },
            {
                path: "/login",
                component: () =>
                    import ("../pages/Login.vue"),
                meta: {
                    masyarakatLoginRequired: false,
                },
            },
            {
                path: "/registrasi",
                component: () =>
                    import ("../pages/Registrasi.vue"),
                meta: {
                    masyarakatLoginRequired: false,
                },
            },

            {
                path: "/lihat-pengajuan",
                name: "lihat-pengajuan",
                component: () =>
                    import ("../pages/LihatPengajuan.vue"),
                meta: {
                    masyarakatLoginRequired: true,
                },
            },
            {
                path: "cetak-ktp-el",
                component: () =>
                    import ("../pages/CetakKTP.vue"),
                meta: {
                    masyarakatLoginRequired: true,
                },
            },
            {
                path: "rekam-ktp-el",
                component: () =>
                    import ("../pages/RekamKTP.vue"),
                meta: {
                    masyarakatLoginRequired: true,
                },
            },
            {
                path: "kia",
                component: () =>
                    import ("../pages/KIA.vue"),
                meta: {
                    masyarakatLoginRequired: true,
                },
            },
            {
                path: "akta",
                component: () =>
                    import ("../pages/Akta.vue"),
                meta: {
                    masyarakatLoginRequired: true,
                },
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
                meta: {
                    admininstratorLoginRequired: true,
                },
            },
            {
                path: "/admin/pengajuan",
                component: () =>
                    import ("../pages/admin/pengajuan/Pengajuan.vue"),
                meta: {
                    admininstratorLoginRequired: true,
                },
            },
            {
                path: "/admin/pengajuan/:id",
                component: () =>
                    import ("../pages/admin/pengajuan/DetailPengajuan.vue"),
                name: "admin.pengajuan",
                meta: {
                    admininstratorLoginRequired: true,
                },
            },
            {
                path: "/admin/user",
                component: () =>
                    import ("../pages/admin/user/User.vue"),
                meta: {
                    admin: true,
                    admininstratorLoginRequired: true,
                },
            },
            {
                path: "/admin/create-user",
                component: () =>
                    import ("../pages/admin/user/CreateUser.vue"),
                meta: {
                    admin: true,
                    admininstratorLoginRequired: true,
                },
            },
            {
                path: "/admin/edit-user",
                component: () =>
                    import ("../pages/admin/user/EditUser.vue"),
                meta: {
                    admininstratorLoginRequired: true,
                },
            },
        ],
    },
    {
        path: "/admin/login",
        component: () =>
            import ("../pages/admin/Login.vue"),
        name: "Login",
        meta: {
            login: true,
            admininstratorLoginRequired: true,
        },
    },
];

export default routes;