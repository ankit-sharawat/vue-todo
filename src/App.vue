<template>
  <div id="app">
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.1/axios.min.js"></script>
    <script src="https://unpkg.com/vuetable-2@1.6.0"></script>
    <img src="./assets/logo.png"> -->
    <nav-main></nav-main>
    <router-view></router-view>
   
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    navMain: Header
  },
  methods: {
    addTodo (title) {
      console.log(this.todos)
      this.todos.push(title)
    },
    completeTodo (todo) {
      this.$emit('complete-todo', todo)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
