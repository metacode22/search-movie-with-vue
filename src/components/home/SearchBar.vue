<template>
  <header class="header">
    <h1>어떤 영화를 알고 싶나요?</h1>
    <form
      class="form"
      @submit.prevent="$emit('updateMovies')">
      <input
        ref="input"
        type="text"
        class="input" 
        @input="$emit('update:modelValue', $event.target.value)" />
      <button
        type="submit"
        class="button">
        검색
      </button>
    </form>
  </header>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['updateMovies', 'update:modelValue'],
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<style scoped lang='scss'>
.header {
  width: 360px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .form {
    background-color: white;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    
    .input {
      all: unset;
      color: black;
      height: 100%;
      flex-grow: 1;
      padding: 0.75rem;
      font-size: 1.25rem;
    }
    
    .button {
      width: 4rem;
      height: 100%;
      border: none;
      cursor: pointer;
      border-radius: 0 2rem 2rem 0;
      font-size: 1.25rem;
      padding: 0;
      outline: inherit;
      transition: all 0.25s;
      
      &:hover {
        background-color: lighten(#212121, 65%);
      }
    }
  }
}
</style>