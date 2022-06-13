import axios from "axios";
import Vuex from "vuex";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
  getTodoById: (state) => (id) => {
    return state.todos.filter((todo) => todo.id === id);
  },
};

const actions = {
  async getTodos({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    const newres = res.data.map((item) => ({
      ...item,
      editable: false,
    }));

    console.log('new addtodo : ' + JSON.stringify(newres));
    commit("setTodos", newres);
    return newres;
  },
  setTodos({ commit }, todos) {
    commit("setTodos", todos);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      userId: 10,
      title,
      completed: false,
    });
    // console.log('after adddata on axios' + JSON.stringify(res.data));
    res.data.editable = false;
    commit("addTodo", res.data);
  },
  async delTodo({ commit }, id) {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos/" + parseInt(id)
    );
    // console.log("after delete todo" + JSON.stringify(res.data));

    commit("delTodo", id);
  },
  async filterTodos({ commit }, number) {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=" + parseInt(number)
    );

    // console.log('afterk filter data' + JSON.stringify(res.data));
    commit("setTodos", res.data);
  },
  updateTodo({ commit }, id, updTodo) {
    commit("updateTodo", id, updTodo);
  },
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
    state.todos.forEach((todo) => {
      console.log(JSON.stringify(todo));
    });
  },
  addTodo(state, todo) {
    state.todos.unshift(todo);
  },
  delTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  updateTodo(state, id, updTodo) {
    let findIdx = state.todos.findIndex((todo) => todo.id === id);
    // console.log('before update to do' + JSON.stringify(state.todos[findIdx]));
    state.todos[findIdx] = updTodo;
    // console.log('after update to do' + JSON.stringify(state.todos[findIdx]));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
