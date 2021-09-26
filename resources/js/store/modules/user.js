import axios from "axios";

export default {
    state: {
        users: [],
        loading: true,
    },
    mutations: {
        setUsers(state, data) {
            state.loading = false;
            state.users = data;
        },
        removeUser(state, id) {
            state.users = state.users.filter((user) => user.id !== id);
        },
        addUser(state, data) {
            state.users.push(data);
        },
    },
    getters: {
        users(state) {
            return state.users;
        },
        loading(state) {
            return state.loading;
        },
    },
    actions: {
        async getUsers({ commit }) {
            let res = await axios.get("/user");
            commit("setUsers", res.data.data);
        },
        async deleteUser({ commit }, id) {
            await axios.delete(`/user/${id}`);
            commit("removeUser", id);
        },
        async addUser({ commit }, data) {
            let res = await axios.post(`/user/${id}`, data);
            commit("addUser", res.data.data);
        },
    },
};