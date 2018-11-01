<template>
  <div>
    <h5> Todo Completed: {{completed}}</h5>
    <h5> Todo Pending: {{pending}} </h5> 
    <br>
    <div class="container" >   
      <b-row v-if="todos.length > 0"> 
         <todo  v-on:delete-todo="deleteTodo" v-on:uncomplete-todo="uncompleteTodo" v-on:complete-todo="completeTodo" v-for="(todo,index) in todos" :todo.sync="todo" :key="index" class="column is-half" ></todo>
      </b-row>
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo'

export default {
  props: ['todos'],
  components: {
    Todo
  },
  computed: {
    completed () {
      if(this.todos.length)
       return this.todos.filter(todo => {return todo.done === true}).length
      else
        "0"
    },
    pending () {
      if(this.todos.length)
        return this.todos.filter(todo => {return todo.done === false}).length
      else
        "0"
    }
  },
  methods: {
    deleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    },
    completeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true
    },
    uncompleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = false
    }
  }
}
</script>
<style>
</style>
