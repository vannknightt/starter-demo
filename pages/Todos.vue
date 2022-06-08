<template>
  <div>
    <h1>Welcome to todos app</h1>

    <!-- <div class="todos">
    <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
        <span>
          {{todo.title}}
        </span>
    </div>
  </div> -->

    <addTodo />
    <br />
    <filterTodos/>
    <br/>

    <div class="todos">
      <Todo v-for="todo in allTodos" v-bind:key="todo.id" v-bind:todo="todo" v-bind:id="todo.id"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  created() {
    this.getTodos();
  },
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["getTodos"]),
  },
};
</script>

<style>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
