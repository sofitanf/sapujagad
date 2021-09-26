import axios from "axios";
import { removeHeaderToken, setHeaderToken } from "../../includes/auth";
import router from "../../router";

export default {
    state: {
        user: {},
        isLoggedIn: false,
        emailEdit: false,
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
            state.isLoggedIn = true;
        },
        resetUser(state) {
            state.user = null;
            state.isLoggedIn = false;
        },
        editUser(state, data) {
            state.user = {
                ...state.user,
                email: data,
            };
            state.emailEdit = false;
        },
        editPassword(state, data) {
            state.user = {
                ...state.user,
                password: data,
            };
        },
        editAvatar(state, data) {
            state.user = {
                ...state.user,
                avatar: data,
            };
        },
        removeAvatar(state) {
            state.user = {...state.user, avatar: null };
        },
    },
    getters: {
        user(state) {
            return state.user;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        emailEdit(state) {
            return state.emailEdit;
        },
    },
    actions: {
        login({ commit, dispatch }, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/login", payload)
                    .then((response) => {
                        const token = response.data.token;
                        localStorage.setItem("token", token);
                        setHeaderToken(token);
                        dispatch("getUser");
                        resolve(response);
                    })
                    .catch((err) => {
                        commit("resetUser");
                        localStorage.removeItem("token");
                        reject(err);
                    });
            });
        },
        async updateUser({ commit }, data) {
            let res = await axios.patch("/user", data);
            commit("editUser", res.data.data);
        },
        async updatePassword({ commit }, data) {
            let res = await axios.put("/user/password", data);
            commit("editPassword", res.data.data);
        },
        async updateAvatar({ commit }, data) {
            let res = await axios.put("/updateAvatar", data);
            commit("editAvatar", res.data.data);
        },
        async deleteAvatar({ commit }) {
            await axios.delete("/deleteAvatar");
            commit("removeAvatar");
        },
        async getUser({ commit }) {
            if (!localStorage.getItem("token")) return;

            try {
                let response = await axios.get("/userLogin");
                commit("setUser", response.data.data);
            } catch (error) {
                commit("resetUser");
                removeHeaderToken();
                localStorage.removeItem("token");
                return error;
            }
        },
        logout({ commit }) {
            return axios.post("/logout").then((res) => {
                commit("resetUser");
                localStorage.removeItem("token");
                removeHeaderToken();
            });
        },
    },
};