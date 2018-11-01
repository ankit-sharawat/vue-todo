<template>
  <section class="section">
    <div class="text-center">
      <h2 class="display-8">Sign in to Your Account</h2>
    </div>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="jumborton">
            <form v-on:submit.prevent>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="joe@bloggs.com" v-model="email">
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" v-model="password">
                </div>
              </div>
              <button type="submit" class="button is-primary" v-on:click="signIn">Sign-in</button>
            </form>
          </div>
        </div>

      </div>
  </section>
</template>

<script>
import Firebase from 'firebase'
export default {
  data: function () {
    return {
      email: 'abcd@email.com',
      password: 'a123456'
    }
  },
  methods: {
    signIn: function () {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('dashboard')
            this.$store.dispatch('setUser')
          },
          error => {
            alert(error.message)
          }
        )
    }
  }
}
</script>

<style lang="scss">
</style>
