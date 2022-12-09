<template>
  <BackHome />
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