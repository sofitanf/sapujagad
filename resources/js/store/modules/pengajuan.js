import axios from "axios";

export default {
    state: {
        pengajuan: [],
        detailPengajuan: {},
        totalKategori: {},
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
        setTotalKategori(state, data) {
            state.totalKategori = data;
        },
        setPengajuan(state, data) {
            state.pengajuan = data;
            state.loadingPengajuan = false;
        },
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
        async addPengajuan({ commit }, data) {
            let res = await axios.post("/pengajuan", data);
            commit("addPengajuan", data);
        },
        async getDetailPengajuan({ commit }, id) {
            let res = await axios.get(`/pengajuan/${id}`);
            commit("setDetailPengajuan", res.data.data);
        },
        async editPengajuan({ commit, state }, data) {
            const id = state.detailPengajuan.id_pengajuan;
            let res = await axios.patch(`/pengajuan/${id}`, data);
            commit("setDetailPengajuan", res.data.data);
        },
        async getTotalKategori({ commit }) {
            let res = await axios.get("/pengajuan/total");
            commit("setTotalKategori", res.data);
        },
    },
};