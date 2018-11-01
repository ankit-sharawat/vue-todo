<template v-if="todo">
<b-col cols="3">
  
    <b-card :title="todo.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            >
      <div class="row">
        <div class="col-9">
          <p no-body class="card-text">
            {{todo.project}}
          </p>
          <div class="content" v-show="isEditing">
            <div class='ui form'>
              <div class='field'>
                <label>Title</label>
                <input type='text' v-model="todo.title" >
              </div>
              <div class='field'>
                <label>Project</label>
                <b-form-textarea id="textarea1"
                                  v-model="todo.project"
                                  placeholder="Enter something"
                                  :rows="3"
                                  :max-rows="6">
                </b-form-textarea>
              </div>
              <div class='ui two button attached buttons'>
                <button class='ui basic blue button' v-on:click="hideForm">
                  Close X
                </button>
              </div>
             </div>
          </div>
        </div>
        <div class="col-3">
          <div  v-show="!isEditing">
            <!-- <div class='header'>
                {{ todo.title }}
            </div>
            <div class='meta'>
                {{ todo.project }}
            </div> -->
            <div no-body class='card-text'>
                <span class='right floated edit icon' v-on:click="showForm">
                <i class='edit icon'></i>
              </span>
              <span class='right floated trash icon' v-on:click="deleteTodo(todo)">
              <i class='trash icon'></i>
              </span>
            </div>
          </div>
        </div>
      </div>
     <div class='ui bottom attached green basic button' v-show="!isEditing &&todo.done" v-on:click="uncompleteTodo(todo)">
        Completed
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done" v-on:click="completeTodo(todo)">
        Pending
    </div>
  </b-card>
</b-col>
</template>

<script type="text/javascript">
export default {
  props: ['todo'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    deleteTodo (todo) {
      this.$emit('delete-todo', todo)
    },
    completeTodo (todo) {
      this.$emit('complete-todo', todo)
    },
    uncompleteTodo (todo) {
      this.$emit('uncomplete-todo', todo)
    }
  }
}
</script>
