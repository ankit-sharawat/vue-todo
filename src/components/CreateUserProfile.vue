<template>
<section class="column is-half">
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" v-model="user.email" disabled>
  </div>
</div>
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" v-model="userInfo.name">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter Name" v-model="userInfo.username">
  </div>
</div>

<div class="field">
  <label class="label">Phone</label>
    <input class="input" type="phone" placeholder="Enter Phone Number" v-model.number="userInfo.phone">
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" @click="createUser">Submit</button>
  </div>
</div>
</section>
</template>
<script>
import { DATATBASE } from '../../config/firebase_con'
var db = DATATBASE
export default {
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  },
  data: function () {
    return {
      userInfo: {
        name: '',
        username: '',
        phone: ''
      }
    }
  },
  created () {
    var self = this
    db.collection('Users').doc(this.user.uid).get().then(function (doc) {
      // console.log(userInfo + doc.data())
      self.userInfo = doc.data()
    })
  },
  methods: {
    createUser () {
      // console.log(this.$store.getters.getUser.uid,this.name,this.username,this.phone)
      db.collection('Users').doc(this.$store.getters.getUser.uid).set({
        id: this.$store.getters.getUser.uid,
        name: this.userInfo.name,
        username: this.userInfo.username,
        phone: this.userInfo.phone
      })
    }
  }
}
</script>
