<template>
<div>
    <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand pull-rigth">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="dashboard" class="navbar-item" v-if="user">Dashboard</router-link>
        <router-link to="sign-in" class="navbar-item" v-if="!user">Sign-in</router-link>
        <router-link to="sign-up" class="navbar-item" v-if="!user">Sign-up</router-link>
        <router-link to="user-list" class="navbar-item" v-if="user">User List</router-link>
        <a class="navbar-item" v-on:click="signOut" v-if="user" style='cursor:pointer'>Sign-out</a>
      </div>
    </nav> -->
    <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
     <b-nav-item ><router-link to="/" class="navbar-link">Home</router-link></b-nav-item>
      <b-nav-item href="dashboard" v-if="user">Dashboard</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <router-link to="user-list" class="dropdown-item" v-if="user">User List</router-link>
         <a class="dropdown-item" v-on:click="signOut" v-if="user" style='cursor:pointer'>Sign-out</a>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->
</div>
</template>

<script>
import Firebase from 'firebase'
export default {
  computed: {
    user () {
      // console.log(this.$store.getters.getUser)
      return this.$store.getters.getUser
    }
  },
  methods: {
    signOut: function () {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$store.dispatch('setUser')
          this.$router.replace('sign-in')
        })
    }
  }
}
</script>
<style>

 .outer-link-active {
   
   color:brown!important
 }
</style>
