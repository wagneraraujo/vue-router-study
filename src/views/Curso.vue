<template>
  <div>
    <h4>{{ api.nome }}</h4>
    <p>{{ api.descricao }}</p>

    <h4>aulas</h4>
    <ul>
      <li v-for="aula in api.aulas" :key="aula.id">
        <router-link :to="{name: 'aula', params: {aula: aula.id}}">
        {{ aula.nome }}
        </router-link>
        </li>
    </ul>

  <router-view></router-view>

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
  },

  beforeUpdate(to, from, next){
    this.fetchData(`aula/${to.params.aula}`)
    next( )
  }
};
</script>

<style></style>
