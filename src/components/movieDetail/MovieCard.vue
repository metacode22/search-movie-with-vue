<template>
  <LoadingSpinner v-if="isLoading" />
  <main
    v-if="!isLoading"
    class="movie-card-container">
    <img
      :src="changeToBetterQuality(movieDetail.Poster)"
      alt="movie poster"
      class="movie-poster"
      @error="replaceToDefault" />
    <div class="movie-info">
      <div>제목: {{ movieDetail.Title }}</div>
      <div>출시일: {{ movieDetail.Released }}</div>
      <div>평점: {{ movieDetail.Rated }}</div>
      <div>상영시간: {{ movieDetail.Runtime }}</div>
      <div>장르: {{ movieDetail.Genre }}</div>
      <div>감독: {{ movieDetail.Director }}</div>
      <div>배우: {{ movieDetail.Actors }}</div>
      <div>언어: {{ movieDetail.Language }}</div>
      <div>국가: {{ movieDetail.Country }}</div>
      <div>줄거리: {{ movieDetail.Plot }}</div>
    </div>
  </main>
</template>

<script>
import { BASE_URL, API_KEY } from '~/constants/api'
import DEFAULT_IMAGE from '~/constants/defaultImage'

export default {
  props: {
    movieId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLoading: false,
      movieDetail: {}
    }
  },
  async mounted() {
    this.isLoading = true
    const query = new URLSearchParams({
      apiKey: API_KEY,
      i: this.movieId,
      plot: 'short'
    }).toString()
    const nextMovieDetail = await this.$fetch(`${BASE_URL}?${query}`)
    
    if (nextMovieDetail.Response === 'False') this.$router.replace({ name: 'notFound' })
    else {
      this.movieDetail = nextMovieDetail
      this.isLoading = false  
    }
  },
  methods: {
    changeToBetterQuality(movieDetailPoster) {
      return movieDetailPoster?.replace(/SX300/g, 'SX700')
    },
    replaceToDefault(event) {
      event.target.src = DEFAULT_IMAGE
    }
  }
}
</script>

<style scoped lang='scss'>
.movie-card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  
  .movie-poster {
    width: 100%;
  }
  
  .movie-info {
    width: 100%;
    padding: 1rem;
    background-color: white;
    
    div {
      padding: 0.25rem;
    }
  }
}


</style>