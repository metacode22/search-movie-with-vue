<template>
  <header class="header">
    <button
      class="back-button"
      @click="$router.push({ name: 'home' })">
      &lt;
    </button>
    <h1 class="back-text">
      Back to Home
    </h1>
  </header>
</template>

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