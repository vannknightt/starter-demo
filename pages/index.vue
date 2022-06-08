<template>
  <div class="container">
    <Todos />
  </div>
</template>

<script>

import Todos from "./Todos.vue"
export default {
  name: 'IndexPage',
  components: {
    Todos,
  }
}
</script>

<style scoped>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
