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
                    masyarakatLogin: true,
                },
            },
            {
                path: "/registrasi",
                component: () =>
                    import ("../pages/Registrasi.vue"),
                meta: {
                    masyarakatLogin: true,
                },
            },

            {
                path: "/lihat-pengajuan",
                name: "lihat-pengajuan",
                component: () =>
                    import ("../pages/LihatPengajuan.vue"),
                meta: {
                    masyarakat: true,
                },
            },
            {
                path: "cetak-ktp-el",
                component: () =>
                    import ("../pages/CetakKTP.vue"),
                meta: {
                    masyarakat: true,
                },
            },
            {
                path: "rekam-ktp-el",
                component: () =>
                    import ("../pages/RekamKTP.vue"),
                meta: {
                    masyarakat: true,
                },
            },
            {
                path: "kia",
                component: () =>
                    import ("../pages/KIA.vue"),
                meta: {
                    masyarakat: true,
                },
            },
            {
                path: "akta",
                component: () =>
                    import ("../pages/Akta.vue"),
                meta: {
                    masyarakat: true,
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
                    admininstrator: true,
                },
            },
            {
                path: "/admin/pengajuan",
                component: () =>
                    import ("../pages/admin/pengajuan/Pengajuan.vue"),
                meta: {
                    admininstrator: true,
                },
            },
            {
                path: "/admin/pengajuan/:id",
                component: () =>
                    import ("../pages/admin/pengajuan/DetailPengajuan.vue"),
                name: "admin.pengajuan",
                meta: {
                    admininstrator: true,
                },
            },
            {
                path: "/admin/user",
                component: () =>
                    import ("../pages/admin/user/User.vue"),
                meta: {
                    admin: true,
                    admininstrator: true,
                },
            },
            {
                path: "/admin/create-user",
                component: () =>
                    import ("../pages/admin/user/CreateUser.vue"),
                meta: {
                    admin: true,
                    admininstrator: true,
                },
            },
            {
                path: "/admin/edit-user",
                component: () =>
                    import ("../pages/admin/user/EditUser.vue"),
                meta: {
                    admininstrator: true,
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
            admininstrator: true,
        },
    },
];

export default routes;