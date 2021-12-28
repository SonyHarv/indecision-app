<template>
  <div class="question">
    <input
      type="text"
      title="Introduce tu duda"
      placeholder="Ella me ama?"
      v-model="question"
    />
    <h2>Recuerda terminar con un signo de interrogación(?)</h2>
  </div>
  <div class="questionWatch">
    <p>{{ question }}</p>
  </div>
</template>
<script>
export default {
  name: "Indecision",

  data() {
    return {
      question: null,
    };
  },
  watch: {
    question(value, oldValue) {
      // console.log({ value, oldValue });
      if (!value.includes("?")) {
        console.log("entro aqui");
      } else {
        console.log("Hola");
      }
    },
  },
};
</script>
<style>
h2 {
  color: #f0eff0;
  font-size: 1.2rem;
}
input {
  border: none;
  border-radius: 5px;
  /* block-size: 1.5rem; */
  inline-size: 350px;
  padding-block-start: 13px;
  padding-block-end: 13px;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  outline: none;
}
input[type="text"]:focus {
  border: 2px solid #0086df;
}
.questionWatch p {
  color: white;
}
</style>
