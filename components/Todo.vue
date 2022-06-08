<template>
  <div v-bind:class="getClass()" v-on:dblclick="handleDbl">
    {{todo.title}}
    <button v-on:click="removeTodo" class="btn-del">
      Delete
    </button>
  </div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  props: ['todo', 'id'],
  methods: {
    ...mapActions(["delTodo", "updateTodo"]),
    removeTodo () {
      this.delTodo(this.id);
    },
    handleDbl() {
      console.log("double click");
      this.updateTodo(this.id);
    },
    getClass() {
      console.log('running getclass');
      return {
        'complete-box': this.todo.completed,
        'todo': !this.todo.completed
      }
    }
  }
}
</script>

<style>
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.btn-del {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: red;
}

.complete-box {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  background: #35495e;
}
</style>
