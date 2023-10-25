<template>
  <body>
    <div id="app">
      <router-view />
    </div>
  </body>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  background: #515A5A;
}
</style>
