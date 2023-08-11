import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const state = () => ({
    users: [],
    students: {},
})

const getters = {
    getUsers(state) {
        return state.users;
    },
    getStudents(state) {
        return state.students;
    }
}

const mutations = {
    setUsers(state, payload) {
        state.users = payload;
    },
    setStudents(state, payload) {
        state.students = payload;
    }
}

const actions = {

    async fetchUsers({ commit }) {
        let res = await axios.get(`http://10.0.1.23/PEESOCESPRO/view.php`);
        console.log("data from db=",res.data)
        commit('setUsers', res.data);
    },
    async fetchStudents({ commit }) {
        let res = await axios.get(`http://10.0.1.23/PEESOCESPRO/userinfo.php`);
        console.log("data from db=",res.data)
        commit('setStudents', res.data);
    },
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}