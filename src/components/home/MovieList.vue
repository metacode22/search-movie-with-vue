<template>
  <main>
    <section>
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