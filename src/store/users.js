import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

const state = () => ({
    users: [],
    student: [],
    started: [],
    finish: []
})

const getters = {
    getUsers(state) {
        console.log("get user=", state.users)
        return state.users;
    },
    getStudents(state) {
        console.log("get student=", state.student)
        return state.student;

    },
    getStarted(state) {
        console.log("get started=", state.started)
        return state.started;
    },
    getFinish(state) {
        console.log("get finish=", state.finish)
        return state.finish;
    }
}

const mutations = {
    setUsers(state, payload) {
        state.users = payload;
    },
    setStudents(state, payload) {
        state.student = payload;
    },
    setStarted(state, payload) {
        state.started = payload;
    },
    setFinish(state, payload) {
        state.finish = payload;
    },
}

const actions = {

    async fetchUsers({ commit }) {
        let res = await axios.get(`http://10.0.1.23/PEESOCESPRO/view.php`);
        console.log("data from db=", res.data)
        commit('setUsers', res.data.users);
        commit('setStarted', res.data.exam_started[0].count);
        commit('setFinish', res.data.exam_finish[0].count);
    },
    async fetchStudent({ commit }, payload) {
        try {
            let res = await axios.post(`http://10.0.1.23/PEESOCESPRO/userinfo.php`, payload);
            console.log("data from db=", res.data.user)
            commit('setStudents', res.data.user[0]);
        }
        catch (error) {
            console.error('Error fetching students:', error);
        }

    },

}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}