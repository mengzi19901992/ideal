<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
html,
body {
  margin: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
  font-family: "PingFang SC", sans-serif;
  font-weight: 400;
}

input,
button,
textarea {
  outline: #fff;
  border: 0;
}

h1,
h2,
h3,
h4,
h5,
p,
input,
textarea {
  font-weight: 400;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
