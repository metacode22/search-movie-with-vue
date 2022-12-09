<template>
  <SearchBar
    v-model="currentTitleText"
    @update-movies="getInitMoviesByTitle" />
  <MovieList :movies="movies" />
  <LoadingSpinner v-show="isLoading" />
  <Observer
    v-show="!(movies.length === 0) && !isLoading && !isAllRendered"
    @load-more-movies="loadMoreMovies" />
</template>

<script>
import { MovieList, SearchBar, Observer } from '~/components/home'
import { BASE_URL, API_KEY } from '~/constants/api'

export default {
  components: {
    MovieList,
    SearchBar,
    Observer
  },
  data() {
    return {
      currentTitleText: '',
      currentPage: 1,
      isLoading: false,
      isAllRendered: false
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies.movies
    },
    currentMovieTitle() {
      return this.$store.state.movies.currentMovieTitle
    }
  },
  methods: {
    async getInitMoviesByTitle() {
      this.isAllRendered = false
      this.$store.commit('movies/setInitMovies', {
        newMovies: [],
      })
      this.isLoading = true
      this.currentPage = 1
      const query = new URLSearchParams({
        apiKey: API_KEY,
        s: this.currentTitleText,
        page: this.currentPage
      }).toString()
      const { Search: initMovies, totalResults, Response } = await this.$fetch(`${BASE_URL}?${query}`)
      if (Response === 'False') alert('해당 검색어의 영화를 찾지 못했습니다.')
      else {
        this.$store.commit('movies/updateCurrentMovieTitle', this.currentTitleText)
        this.$store.commit('movies/setInitMovies', initMovies, Number(totalResults))
        this.$store.commit('movies/setInitMovies', {
          newMovies: initMovies,
          newTotalResults: Number(totalResults)
        })
      }
      
      this.isLoading = false
    },
    async loadMoreMovies() {
      if (this.$store.state.movies.movies.length === this.$store.state.movies.currentMovieTotalResults) {
        if (this.currentPage !== 1) alert('해당 검색어의 영화가 모두 렌더링 되었습니다.')  
        
        this.isAllRendered = true
        return
      }
      
      this.currentPage += 1
      this.isLoading = true
      const query = new URLSearchParams({
        apiKey: API_KEY,
        s: this.$store.state.movies.currentMovieTitle,
        page: this.currentPage
      })
      const { Search: nextMovies } = await this.$fetch(`${BASE_URL}?${query}`)
      this.$store.commit('movies/loadMoreMovies', nextMovies)
      this.isLoading = false
    },
  }
}
</script>