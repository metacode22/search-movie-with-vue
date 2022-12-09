<template>
  <div class="container">
    <div class="inner-container">
      <RouterView /> 
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  padding: 0;
  margin: 0;
  background-color: #212121;
}

ul {
  list-style: none;
  padding-left: 0;
}

.container {
  display: flex;
  justify-content: center;
}

.inner-container {
  max-width: 360px;
}
</style>
