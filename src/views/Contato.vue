<template>
  <div>
    {{ contato }}
  </div>
</template>

<script>
export default {
  name: "contato",
  data() {
    return {
      api: null
    };
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/contato")
        .then(r => r.json())
        .then(r => {
          this.api = r;
        });
    }
  },

  created() {
    this.fetchData();
  }
};
</script>
