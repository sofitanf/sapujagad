import axios from "axios";

export default {
    state: {
        pengajuan: [],
        detailPengajuan: {},
        totalKategori: {},
        dashboardTotal: {},
        loadingPengajuan: true,
    },
    getters: {
        pengajuan(state) {
            return state.pengajuan;
        },
        loadingPengajuan(state) {
            return state.loadingPengajuan;
        },
        detailPengajuan(state) {
            return state.detailPengajuan;
        },
        totalKategori(state) {
            return state.totalKategori;
        },
        dashboardTotal(state) {
            return state.dashboardTotal;
        },
    },
    mutations: {
        setDashboardTotal(state, data) {
            state.dashboardTotal = data;
        },
        setTotalKategori(state, data) {
            state.totalKategori = data;
        },
        setPengajuan(state, data) {
            state.pengajuan = data;
            state.loadingPengajuan = false;
        },
        // removePengajuan(state, id) {
        //     state.pengajuan = state.pengajuan.filter((data) => data.id !== id);
        // },
        setDetailPengajuan(state, data) {
            state.detailPengajuan = data;
        },
        addPengajuan(state, data) {
            state.pengajuan.push(data);
        },
    },
    actions: {
        async getPengajuan({ commit }) {
            let res = await axios.get("/pengajuan");
            commit("setPengajuan", res.data.data);
        },
        async addPengajuan({ commit, dispatch }, data) {
            let res = await axios.post("/pengajuan", data);
            commit("addPengajuan", data);
            // dispatch("getTotalKategori");
        },
        async getDetailPengajuan({ commit }, id) {
            let res = await axios.get(`/pengajuan/${id}`);
            commit("setDetailPengajuan", res.data.data);
        },
        // async deletePengajuan({ commit }, id) {
        //     await axios.delete(`/pengajuan/${id}`);
        //     commit("removePengajuan", id);
        // },
        async editPengajuan({ commit, state }, data) {
            const id = state.detailPengajuan.id;
            let res = await axios.patch(`/pengajuan/${id}`, data);
            commit("setDetailPengajuan", res.data.data);
        },
        async getDashboardTotal({ commit }) {
            let res = await axios.get("/dashboard/total");
            commit("setDashboardTotal", res.data);
        },
        async getTotalKategori({ commit }) {
            let res = await axios.get("/pengajuan/total");
            commit("setTotalKategori", res.data);
        },
    },
};