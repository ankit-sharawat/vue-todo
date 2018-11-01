// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { store } from './store/store'
import { routes } from './router/routes'
import Firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import { DATATBASE } from '../config/firebase_con'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery.flowchart'


Vue.config.productionTip = true
Vue.use(BootstrapVue)
// var config = {
//   apiKey: 'AIzaSyD_K8S8tbrzAmiqn4MSwRJQ-jO2-sNB_OU',
//   authDomain: 'fir-vue-543d1.firebaseapp.com',
//   databaseURL: 'https://fir-vue-543d1.firebaseio.com',
//   projectId: 'fir-vue-543d1',
//   storageBucket: '',
//   messagingSenderId: '735976470373'
// }

// console.log(database.collection('users'))
DATATBASE.collection('Users').get().then((querySnapshot) => {
  console.log(querySnapshot)
  querySnapshot.forEach((doc) => {
    console.log(doc.data())
  })
})
// database.ref('users').on('value', function (snapshot) {
//   console.log(snapshot.val())
// })

Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // console.log(Firebase.firestore().collection('Users').doc(currentUser.uid))
  if (requiresAuth && !currentUser) {
    next('/sign-in')
  } else if (requiresAuth && currentUser) {
    // console.log(requiresAuth + '' + currentUser.email + to + from)
    next()
  } else {
    next()
  }
})
Firebase.auth().onAuthStateChanged(function (user) {
/* eslint-disable no-new */
  // new Vue({
  //   el: '#app',
  //   router: router,
  //   components: { App },
  //   store: store,
  //   template: '<App/>'
  // })
  // new Vue({
  //   el: '#app',
  //   components: { App },
  //   router: router,
  //   store: store
  // }).$mount('#app')
  new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App),
    created () {
      if (Firebase.auth().currentUser) {
        store.dispatch('setUser')
      }
    }
  })
})
