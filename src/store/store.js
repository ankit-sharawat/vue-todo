import Vue from 'vue'
import Vuex from 'vuex'
// import { DATATBASE } from '../../config/firebase_con'
import Firebase from 'firebase'
// import Firebase from 'firebase'

Vue.use(Vuex)
// var db = DATATBASE
export const store = new Vuex.Store({
  state: {
    user: null,
    todos: [],
    moreParams: {}
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getFilter: state => {
      return state.moreParams
    }
  },
  mutations: {
    setUser: state => {
      state.user = Firebase.auth().currentUser
    },
    setTodos (state,t) {
      state.todo = t
    },
    setFilterParam (state,text)
    {
      state.moreParams.filter = text
    },
    resetFilter: state =>{
      state.moreParams = {}
    }
  },
  actions: {
    setUser (context,t) {
      context.commit('setUser',t)
    },
    setFilterParam (context,t) {
      context.commit('setFilterParam',t)
    },
    resetFilter (context)
    {
      context.commit('resetFilter')
    }
  }
})
