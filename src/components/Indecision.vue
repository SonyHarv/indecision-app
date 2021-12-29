<template>
  <img v-if="img" :src="img" alt="IndecisionApp Images" />
  <div class="question">
    <input
      type="text"
      title="Introduce tu duda"
      placeholder="Hazme una pregunta?"
      v-model="question"
    />
    <h2>Recuerda terminar con un signo de interrogación(?)</h2>
  </div>
  <div class="questionWatch" v-if="isValidation">
    <p>{{ question }}</p>
    <p>{{ answer }}</p>
  </div>
</template>
<script>
export default {
  name: "Indecision",

  data() {
    return {
      question: null,
      answer: null,
      img: null,
      isValidation: false,
    };
  },
  methods: {
    async getAnswer() {
      this.answer = "Pensando...";
      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (resp) => resp.json()
      );

      this.answer = answer === "yes" ? "Si!" : "No!";
      console.log(answer);
      this.img = image;
    },
  },
  watch: {
    question(value, oldValue) {
      this.isValidation = false;
      if (value.includes("?")) {
        this.isValidation = true;
        console.log("entro aqui");
        return this.getAnswer();
      }
    },
  },
};
</script>
<style scoped>
h2 {
  color: #f0eff0;
  font-size: 1.2rem;
}
input {
  border: none;
  border-radius: 5px;
  inline-size: 350px;
  padding-block-start: 13px;
  padding-block-end: 13px;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  outline: none;
  box-sizing: border-box;
  resize: vertical;
}
input[type="text"]:focus {
  border: 2px solid #0086df;
}
.questionWatch p {
  color: white;
}
img {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
@media screen and (max-width: 496px) {
  input {
    width: 100%;
  }
}
</style>
