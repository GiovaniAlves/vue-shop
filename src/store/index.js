import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'

import auth from '@/modules/auth/store'
import cart from '@/modules/website/modules/cart/store'
import specification from '@/modules/dashboard/modules/specifications/store'
import product from '@/modules/dashboard/modules/products/store'

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
      cart,
      specification,
      product
   }
   /* plugins: [
      new VuexPersistence({
         storage: window.localStorage
      }).plugin
   ] */
})
