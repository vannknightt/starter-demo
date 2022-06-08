<template>
  <div>
    <h3>Filter Todos</h3>
    <select v-on:change="ftrTodo($event)">
      <option value="200">200</option>
      <option value="150">150</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="25">25</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  methods: {
    ...mapActions(["filterTodos"]),
    ftrTodo(event) {
      console.log("selected value" + event.target.value);
      this.filterTodos(event.target.value);
    }
  }
};
</script>

<style></style>
