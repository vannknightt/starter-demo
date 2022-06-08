<template>
  <div>
    <h3>Add Todo</h3>
    <div>
      <input type="text" v-model="text" placeholder="Typing todo...." />
      <button v-on:click="addNewTodo">Add new todo</button>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
export default {
  name: "addTodo",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    addNewTodo() {
      console.log('before add to do '+ this.text);
      this.addTodo(this.text);
    }
  }
};
</script>

<style></style>
