<template>
  <BackHome
    :is-entered-by-movie-list-item="isEnteredByMovieListItem" />
  <MovieCard :movie-id="$route.params.id" />
</template>

<script>
import { MovieCard } from '~/components/movieDetail'

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      isEnteredByMovieListItem:
        this.$route.params.isEnteredByMovieListItem === 'true',
    }
  },
}
</script>
