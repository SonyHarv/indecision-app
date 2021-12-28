<script>
import Indecision from "./components/Indecision.vue";
export default {
  name: "App",
  components: {
    Indecision,
  },
};
</script>

<template>
  <Indecision />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #010001;
}
</style>
