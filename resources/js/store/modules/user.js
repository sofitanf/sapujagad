import axios from "axios";

export default {
    state: {
        users: [],
        trash: [],
        loading: true,
    },
    mutations: {
        setUsers(state, data) {
            state.loading = false;
            state.users = data;
        },
        setTrash(state, data) {
            state.loading = false;
            state.trash = data;
        },
        remove(state, id) {
            state.trash = state.trash.filter((user) => user.id_user !== id);
        },
        addUser(state, data) {
            state.users.push(data);
        },
        removeUser(state, id) {
            state.users.map((user) => {
                if (user.id_user === id) {
                    state.trash.push(user);
                }
            });

            state.users = state.users.filter((user) => user.id_user !== id);
        },
        removeTrash(state, id) {
            state.trash.map((user) => {
                if (user.id_user === id) {
                    state.users.push(user);
                }
            });

            state.trash = state.trash.filter((user) => user.id_user !== id);
        },
    },
    getters: {
        users(state) {
            return state.users;
        },
        trash(state) {
            return state.trash;
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
        async getTrash({ commit }) {
            let res = await axios.get("/user/trash");
            commit("setTrash", res.data.data);
        },
        async restoreUser({ commit }, id) {
            await axios.get(`/user/restore/${id}`);
            commit("removeTrash", id);
        },
        async softDeleteUser({ commit }, id) {
            await axios.delete(`/user/delete/${id}`);
            commit("removeUser", id);
        },
        async deleteUser({ commit }, id) {
            // debugger;
            await axios.delete(`/user/${id}`);
            commit("remove", id);
        },
        async addUser({ commit }, data) {
            let res = await axios.post("/user", data);
            debugger;
            commit("addUser", res.data.data);
        },
    },
};