<template>
  <header class="header">
    <button
      class="back-button"
      @click="
        isEnteredByMovieListItem
          ? $router.go(-1)
          : $router.push({ name: 'home' })
      ">
      &lt;
    </button>
    <h1 class="back-text">
      Back to Home
    </h1>
  </header>
</template>

<script>
export default {
	props: {
		isEnteredByMovieListItem: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;

	.back-button {
		color: black;
		border: none;
		background-color: white;
		height: 2rem;
		width: 2rem;
		border-radius: 50%;
		font-size: 1.5rem;
		margin-right: 1rem;
		cursor: pointer;

		&:hover {
			background-color: darken(white, 20%);
		}
	}
}
</style>
