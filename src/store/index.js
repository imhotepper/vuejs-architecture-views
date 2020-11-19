import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {getUsers} from '../services/helloworld'


export default new Vuex.Store({
  state: {
    users:[]
  },
  mutations: {
    SET_USERS(state, users){
      state.users = users;
    }
  },
  actions: {
    async getUsers({commit}){
        const users = await getUsers();
        commit("SET_USERS", users)
    }
  },
  modules: {
  }
})
