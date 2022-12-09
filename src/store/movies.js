export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      currentMovieTitle: '',
      currentMovieTotalResults: 0
    }
  },
  getters: {},
  mutations: {
    setInitMovies(state, { newMovies, newTotalResults = 0 }) {
      state.movies = newMovies
      state.currentMovieTotalResults = newTotalResults
    },
    loadMoreMovies(state, newMovies) {
      state.movies = state.movies.concat(newMovies)
    },
    updateCurrentMovieTitle(state, newMovieTitle) {
      state.currentMovieTitle = newMovieTitle
    }
  },
}