import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

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

const vuexLocal = new VuexPersistence({
   storage: window.localStorage,
   reducer: (state) => ({ cart: state.cart }) // only save cart module
})

export default new Vuex.Store({
   state,
   mutations,
   actions,
   modules: {
      auth,
      cart,
      specification,
      product
   },
   plugins: [
      vuexLocal.plugin
   ]
   /* -- USAGE WITH MODULES --
   plugins: [
      new VuexPersistence({
         storage: window.localStorage
      }).plugin
   ] */
})
