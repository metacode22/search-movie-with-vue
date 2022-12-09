<template>
  <div class="observer"></div>
</template>

<script>
export default {
  emits: ['loadMoreMovies'],
  data() {
    return {
      observer: null
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('loadMoreMovies')
      }
    }, options)
    
    this.observer.observe(this.$el)
  },
  unmounted() {
    this.observer.disconnect()
  }
}
</script>

<style scoped>
.observer {
  height: 150px;
}
</style>