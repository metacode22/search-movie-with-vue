<template>
  <main>
    <section>
      <!-- currentMovies가 비었으면 아무 것도 없습니다 등등 해줘야 됨. -->
      <!-- v-if -->
      <!-- v-else -->
      <!-- <MovieListItem v-for /> -->
      <ul>
        <MovieListItem
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie" />
      </ul>
    </section>
  </main>
</template>

<script>
import MovieListItem from './MovieListItem'

export default {
  components: {
    MovieListItem,
  },
  props: {
    movies: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>