<template>
  <div>
    <h4>{{ api.nome }}</h4>
    <p>{{ api.descricao }}</p>

    <h4>aulas</h4>
    <ul>
      <li v-for="aula in api.aulas" :key="aula.id">{{ aula.nome }}</li>
    </ul>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "curso",
  props: ["curso"],
  mixins: [fetchData],

  created() {
    this.fetchData(`curso/${this.curso}`);
  }
};
</script>

<style></style>
