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
    <filterTodos />
    <br />

    <div class="todos">
      <a-table :dataSource="allTodos" :columns="columns">
        <template slot="completed" slot-scope="text">
          {{text}}
        </template>
        <template slot="title" slot-scope="text, record">
          <a-input
            v-if="editable"
            :value="text"
            @change="saveTitle($event.target.value, record.id)"
          ></a-input>
          <p v-else>
            {{ text }}
          </p>
        </template>

        <template slot="userid" slot-scope="text, record">
          <a-input
            v-if="editable"
            :value="text"
            @change="saveUserId($event.target.value, record.id)"
          ></a-input>
          <p v-else>
            {{ text }}
          </p>
        </template>

        <template slot="operation" slot-scope="text, record">
          <a v-if="editable === false" v-on:click="changeEdit">Edit</a>
          <a v-if="editable === true" v-on:click="changeEdit">Save</a>

          <a-divider type="vertical" />
          <a v-on:click="deleteTodo(record.id)">Delete</a>
          <a-divider type="vertical" />

          <nuxt-link :to="`/todo/${record.id}`"> Details </nuxt-link>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      data: [],
      titleVal: "",
      completedVal: "",
      editable: false,
      columns: [
        {
          title: "",
          dataIndex: "",
          key: "",
        },
        {
          title: "Id",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "userId",
          dataIndex: "userId",
          key: "userId",
          scopedSlots: { customRender: "userid" },

        },
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
          scopedSlots: { customRender: "title" },
        },
        {
          title: "Completed",
          dataIndex: "completed",
          key: "completed",
          scopedSlots: { customRender: "completed" },
        },
        {
          title: "Operation",
          dataIndex: "operation",
          key: "operation",
          scopedSlots: { customRender: "operation" },
        },
      ],
    };
  },
  created() {
    this.getTodos().then((val) => {
      this.data = val;
    });
  },
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["getTodos", "delTodo", "setTodos"]),
    deleteTodo(id) {
      this.delTodo(id);
    },
    changeEdit() {
      this.editable = !this.editable;
    },
    saveEdit() {
      this.editable = !this.editable;
      this.setTodos(this.allTodos);
    },
    saveTitle(val, id) {
      console.log("title value : " + val + " id : " + id);
      let findIdx = this.allTodos.findIndex((item) => item.id === id);
      console.log('find index : ' + findIdx);
      this.allTodos[findIdx].title = val;

      console.log(JSON.stringify(this.allTodos[findIdx]));
    },
    saveUserId(val, id) {
      console.log("user id value : " + val + " id : " + id);
      let findIdx = this.allTodos.findIndex((item) => item.id === id);
      this.allTodos[findIdx].userId = val;
      console.log(JSON.stringify(this.allTodos[findIdx]));
    },
  },
};
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
/* .todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
} */
</style>
