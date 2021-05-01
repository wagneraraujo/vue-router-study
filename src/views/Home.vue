<template>
  <div class="home">{{ api }}</div>
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
