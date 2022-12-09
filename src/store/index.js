import { createStore } from 'vuex'
import movies from './movies'

export default createStore({
  namespaced: true,
  modules: {
    movies
  }
})