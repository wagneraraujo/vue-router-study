<template>
  <div>
    {{ api }}
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
export default {
  name: "contato",
  mixins: [fetchData],

  created() {
    this.fetchData("contato");
  }
};
</script>
