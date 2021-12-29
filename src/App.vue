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
  margin: auto;
  position: relative;
  top: 250px;
  max-inline-size: 1290px;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
}
</style>
