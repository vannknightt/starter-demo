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

        <template slot="userid" slot-scope="text, record">
          <a-input
            v-if="editable"
            :value="text"
            @change="saveUserId($event.target.value, record.id)"
          ></a-input>
          <p v-else-if="record">
            {{ record.userId }}
          </p>
        </template>
        <template slot="title" slot-scope="text, record">
          <a-input
            v-if="editable"
            :value="text"
            @change="saveTitle($event.target.value, record.id)"
          ></a-input>
          <p v-else-if="record">
            {{ record.title }}
          </p>
        </template>
        <template slot="completed" slot-scope="text">
          {{text}}
        </template>

        <template slot="operation" slot-scope="text, record">
          <a v-if="editable === false" v-on:click="changeEdit">Edit</a>

          <a v-if="editable === true" v-on:click="saveEdit(record.id)">Save</a>
          <a-divider v-if="editable === true" type="vertical" />
          <a v-if="editable === true" v-on:click="cancelEdit(record.id)"
            >Cancel</a
          >
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
      cacheData: [],
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
          title: "title",
          dataIndex: "title",
          key: "title",
          scopedSlots: { customRender: "title" },
        },
        {
          title: "completed",
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
      this.cacheData = [...val];
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
    saveEdit(id) {
      console.log("save edit hit by id : " + id);

      // const newData = [...this.data];
      // const newCacheData = [...this.cacheData];

      // const target = newData.find((todo) => todo === todo.id);
      // const targetCache = newCacheData.find((todo) => todo === todo.id);
      // if (target && targetCache) {
      //   this.allTodos = newData;
      //   Object.assign(targetCache, target);
      //   this.cacheData = newCacheData;
      // }

      let findIdx = this.allTodos.findIndex((todo) => todo.id === id);

      console.log(
        "allTodos data in findidx in saveEdit : " +
          findIdx +
          " " +
          JSON.stringify(this.allTodos[findIdx])
      );
      this.cacheData[findIdx] = JSON.parse(
        JSON.stringify(this.allTodos[findIdx])
      );
      this.editable = !this.editable;
    },
    cancelEdit(id) {
      console.log("id in cancelEdit : " + id);
      // const newData = [...this.allTodos];

      // const target = this.allTodos.find((todo) => todo.id === id);
      // if (target) {
      //   Object.assign(
      //     target,
      //     this.cacheData.find((todo) => todo.id === id)
      //   );
      //   // this.allTodos = newData;
      // }

      let findIdx = this.allTodos.findIndex((todo) => todo.id === id);
      console.log(
        "allTodos before cancel edit : " +
          JSON.stringify(this.allTodos[findIdx])
      );
      console.log(
        "cache data in findidx : " + JSON.stringify(this.cacheData[findIdx])
      );

      // this.allTodos[findIdx] = JSON.parse(
      //   JSON.stringify(this.cacheData[findIdx])
      // );
      Object.assign(this.allTodos[findIdx], this.cacheData[findIdx]);

      console.log(
        "allTodos after cancel edit : " + JSON.stringify(this.allTodos[findIdx])
      );
      this.editable = !this.editable;
    },
    saveTitle(val, id) {
      // console.log("title value : " + val + " id : " + id);

      // const newData = [...this.allTodos];
      // const target = newData.find((todo) => todo.id === id);
      // if (target) {
      //   target["title"] = val;
      //   this.allTodos = newData;
      // }

      let findIdx = this.allTodos.findIndex((item) => item.id === id);
      this.allTodos[findIdx].title = val;
      console.log(JSON.stringify(this.allTodos[findIdx]));
    },
    saveUserId(val, id) {
      // console.log("user id value : " + val + " id : " + id);

      // const newData = [...this.allTodos];
      // const target = newData.find((todo) => todo.id === id);
      // if (target) {
      //   target["userId"] = val;
      //   this.allTodos = newData;
      // }

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
