<template>
  <div>
    <nuxt-link to="/" >
      <h1><a>Back to Todo</a></h1>
    </nuxt-link>
    <h2>To do details</h2>
    <h3> To do id : {{todo.id}}</h3>
    <h3> To do user_id: {{todo.userId}}</h3>
    <h3> To do title: {{todo.title}}</h3>
    <h3> To do completed: {{todo.completed}}</h3>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
  data() {
    return {
      todo: {},
      id: -1,
    }
  },
  created() {
    let cid = this.$route.params.id;
    this.id = parseInt(cid);
    // this.todo = getters.getTodoById(cid);
  },
  computed: {
    ...mapGetters(["getTodoById"])
  },
  mounted() {
    console.log('id value : ' + this.id);
    console.log('type of id: ' + typeof this.id);
    console.log(JSON.stringify(this.getTodoById(this.id)));

    this.todo = this.getTodoById(this.id)[0];
  },
  methods: {
    ...mapActions(["getTodoById"]),
  }
}
</script>

<style>

</style>
