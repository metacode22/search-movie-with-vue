<template>
  <BackHome :is-entered-by-movie-list-item="$route.params.isEnteredByMovieListItem" />
  <MovieCard :movie-id="$route.params.id" />
</template>

<script>
import { MovieCard } from '~/components/movieDetail'

export default {
  components: {
    MovieCard
  },
}
</script>