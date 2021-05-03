<template>
  <div>
    <div class="home" v-if="api">
      <h3>{{ api.titulo }}</h3>
      <p>{{ api.descricao }}</p>

      <router-link tag="button" to="cursos">Veja o curso</router-link>
      <div>
        <h5>Avaliações</h5>
        <ul>
          <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
            <p>{{ avaliacao.descricao }}</p>
            <small>{{ avaliacao.nome }}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "Home",
  mixins: [fetchData],

  created() {
    this.fetchData("home");
  }
};
</script>
