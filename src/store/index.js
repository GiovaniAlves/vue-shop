import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/modules/auth/store'
import specification from '@/modules/dashboard/modules/specifications/store'

Vue.use(Vuex)

const state = {
   title: 'Painel'
}

const mutations = {
   SET_TITLE (state, { title }) {
      state.title = title
   }
}

const actions = {
   setTitle ({ commit }, payload) {
      commit('SET_TITLE', payload)
   }
}

export default new Vuex.Store({
   state,
   mutations,
   actions,
   modules: {
      auth,
      specification
   }
})
