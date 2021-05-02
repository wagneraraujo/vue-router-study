<template>
  <div>
    <h2>{{ api.titulo }}</h2>
    <p>{{ api.descricao }}</p>

    <ul v-if="api">
      <li v-for="curso in api.cursos" :key="curso.id">
        <router-link :to="{ name: 'curso', params: { curso: curso.id } }">
          <h3>{{ curso.nome }} | {{ curso.totalAulas }}</h3>
          <p>{{ curso.descricao }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
export default {
  name: "cursos",
  mixins: [fetchData],

  created() {
    this.fetchData("cursos");
  }
};
</script>

<style></style>
