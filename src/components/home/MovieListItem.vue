<template>
  <li
    class="movie-list-item-container"
    @click="$router.push({ name: 'movieDetail', params: {
      id: movie.imdbID
    }})">
    <img
      class="movie-poster"
      :src="movie.Poster"
      alt="movie poster"
      @error="replaceToDefault" />
    <div class="movie-info">
      <span
        class="movie-info__title"
        :title="movie.Title">제목: {{ movie.Title }}</span>
      <span class="movie-info__year">출시일: {{ movie.Year }}</span>
    </div>
  </li>
</template>

<script>
import DEFAULT_IMAGE from '~/constants/defaultImage'

export default {
  props: {
    movie: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    replaceToDefault(event) {
      event.target.src = DEFAULT_IMAGE
    }
  }
}
</script>

<style scoped lang="scss">
.movie-list-item-container {
  width: 100%;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.25s;
  border-radius: 1rem;
  
  &:hover {
    box-shadow: 5px 6px 15px 4px rgba(0,0,0,0.75);
    transform: scale(1.05);
  }
  
  .movie-poster {
    width: 100%;
    border-radius: 1rem 1rem 0 0;
  }
  
  .movie-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 2rem;
    gap: 1rem;
    border-radius: 0 0 1rem 1rem;
    
    &__title {
      flex-grow: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>