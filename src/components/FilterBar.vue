<template>
    <div class="filter-bar ui basic segment grid">
      <div class="ui form">
        <div class="inline field">
          <label>Search for:</label>
          <input type="text" v-model="filterText" class="three wide column" @change="doFilter" placeholder="name, nickname, or email">
          <button class="ui primary button" @click="doFilter">Go</button>
          <button class="ui button" @click="resetFilter">Reset</button>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        filterText: ''
      }
    },
    watch: {
     filterText: function (val) {
      this.$emit('do-filter', val)
      console.log('doFilter:', val)
    }},
    methods: {
      doFilter () {
        this.$emit('do-filter',this.filterText)
        console.log('doFilter:', this.filterText)
      },
      resetFilter () {
        this.$emit('on-filter-reset',this.filterText)
        this.filterText = ''
        console.log('resetFilter')
      }
    }
  }
</script>
