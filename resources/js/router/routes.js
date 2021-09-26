import Home from "../pages/Home.vue";
import AppLayout from "../layouts/AppLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import Login from "../pages/Login.vue";
import LihatPengajuan from "../pages/LihatPengajuan.vue";
import CetakKTP from "../pages/CetakKTP.vue";
import RekamKTP from "../pages/RekamKTP.vue";
import KIA from "../pages/KIA.vue";
import Akta from "../pages/Akta.vue";
import Dashboard from "../pages/admin/Dashboard.vue";
import Pengajuan from "../pages/admin/pengajuan/Pengajuan.vue";
import DetailPengajuan from "../pages/admin/pengajuan/DetailPengajuan.vue";
import User from "../pages/admin/user/User.vue";
import CreateUser from "../pages/admin/user/CreateUser.vue";
import EditUser from "../pages/admin/user/EditUser.vue";

const routes = [{
        path: "/",
        component: AppLayout,
        children: [{
                path: "",
                component: Home,
            },
            {
                path: "lihat-pengajuan",
                name: "lihat-pengajuan",
                component: LihatPengajuan,
            },
            {
                path: "cetak-ktp-el",
                component: CetakKTP,
            },
            {
                path: "rekam-ktp-el",
                component: RekamKTP,
            },
            {
                path: "kia",
                component: KIA,
            },
            {
                path: "akta",
                component: Akta,
            },
        ],
    },
    {
        path: "/admin",
        component: AdminLayout,
        meta: {
            requiresAuth: true,
        },
        children: [{
                path: "/admin/dashboard",
                component: Dashboard,
                name: "Dashboard",
            },
            {
                path: "/admin/pengajuan",
                component: Pengajuan,
            },
            {
                path: "/admin/pengajuan/:id",
                component: DetailPengajuan,
                name: "admin.pengajuan",
            },
            {
                path: "/admin/user",
                component: User,
                meta: {
                    admin: true,
                },
            },
            {
                path: "/admin/create-user",
                component: CreateUser,
                meta: {
                    admin: true,
                },
            },
            {
                path: "/admin/edit-user",
                component: EditUser,
                meta: {
                    admin: true,
                },
            },
        ],
    },
    {
        path: "/login",
        component: Login,
        name: "Login",
        meta: {
            login: true,
        },
    },
];

export default routes;