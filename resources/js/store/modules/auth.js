import axios from "axios";
import { removeHeaderToken, setHeaderToken } from "../../includes/auth";

export default {
    state: {
        user: {},
        isLoggedIn: false,
        token: null,
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
            state.isLoggedIn = true;
        },
        setToken(state, token) {
            state.token = token;
        },
        resetUser(state) {
            state.user = null;
            state.isLoggedIn = false;
        },
        editUser(state, data) {
            const { key, value } = data;
            state.user = {
                ...state.user,
                [key]: value,
            };
        },
    },
    getters: {
        user(state) {
            return state.user;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        avatar(state) {
            return state.user.avatar ?
                `/storage/avatar/${state.user.avatar}` :
                "/storage/avatar/avatar.png";
        },
    },
    actions: {
        async login({ commit, dispatch }, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/login", payload)
                    .then((response) => {
                        addUser(response, dispatch);
                        resolve(response);
                    })
                    .catch((err) => {
                        removeUser(commit);
                        reject(err);
                    });
            });
        },
        async userLogin({ commit, dispatch }, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/login-user", payload)
                    .then((response) => {
                        addUser(response, dispatch);

                        resolve(response);
                    })
                    .catch((err) => {
                        removeUser(commit);
                        reject(err);
                    });
            });
        },
        async getUser({ commit }) {
            if (!localStorage.getItem("token")) {
                return;
            }

            try {
                let res = await axios.get("/userLogin");
                commit("setUser", res.data.data);
            } catch (error) {
                removeUser(commit);
                return error;
            }
        },
        async updateUser({ commit }, data) {
            let res = await axios.patch("/user", data);
            commit("editUser", { key: "username", value: res.data.data });
        },
        async updatePassword({ commit }, data) {
            let res = await axios.put("/user/password", data);
            commit("editUser", { key: "password", value: res.data.data });
        },
        async updateAvatar({ commit }, data) {
            let res = await axios.put("/updateAvatar", data);
            commit("editUser", { key: "avatar", value: res.data.data });
        },
        async deleteAvatar({ commit }) {
            await axios.delete("/deleteAvatar");
            commit("editUser", { key: "avatar", value: null });
        },

        logout({ commit }) {
            return axios.post("/logout").then(() => {
                removeUser(commit);
            });
        },
    },
};

const removeUser = (commit) => {
    commit("resetUser");
    localStorage.removeItem("token");
    removeHeaderToken();
};

const addUser = (response, dispatch) => {
    const token = response.data.token;
    localStorage.setItem("token", token);
    setHeaderToken(token);
    dispatch("getUser");
};