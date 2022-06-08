import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async getTodos({commit}) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    commit("setTodos", res.data);
  },

  async addTodo({commit}, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {userId: 10, title, completed: false});
    // console.log('after adddata on axios' + JSON.stringify(res.data));

    commit('addTodo', res.data);
  },
  async delTodo({commit}, id) {
    const res = await axios.delete("https://jsonplaceholder.typicode.com/todos/" + parseInt(id));
    // console.log("after delete todo" + JSON.stringify(res.data));

    commit('delTodo', id);
  },
  async filterTodos({commit}, number) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=" + parseInt(number));

    // console.log('afterk filter data' + JSON.stringify(res.data));
    commit('setTodos', res.data);
  },
  updateTodo({commit}, id) {
    commit('updateTodo', id);
  }
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
    // state.todos.forEach(todo => {
    //   console.log(JSON.stringify(todo));
    // });
  },
  addTodo(state, todo) {
    state.todos.unshift(todo);
  },
  delTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  updateTodo(state, id) {
    let findIdx = state.todos.findIndex(todo => todo.id === id);

    console.log('before update to do' + JSON.stringify(state.todos[findIdx]));
    state.todos[findIdx].completed = !state.todos[findIdx].completed;
    console.log('after update to do' + JSON.stringify(state.todos[findIdx]));
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};