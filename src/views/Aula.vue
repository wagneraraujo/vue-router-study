<template>
  <div v-if="api">
      <h4>{{api.nome}}</h4>
      teste aula
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"

export default {
    name: "aula",
    props: ["aula"],
    mixins: [fetchData],

    created(){
        this.fetchData(`aula/${this.aula}`)
    }

}
</script>

<style>

</style>