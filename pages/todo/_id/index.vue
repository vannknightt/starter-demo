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

import {mapActions} from 'vuex';

export default {
  data() {
    return {
      todo: {},
    }
  },
  created() {
    let cid = this.$route.params.id;
    this.getTodoById(cid).then((val) => {
      this.todo = val;
    })
  },
  methods: {
    ...mapActions(["getTodoById"]),
  }
}
</script>

<style>

</style>
