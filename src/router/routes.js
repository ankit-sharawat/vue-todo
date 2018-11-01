// import TodoList from '../components/TodoList.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import Error404 from '../components/Error404.vue'
import Home from '../components/Home.vue'
import Dashboard from '../components/Dashboard.vue'
import UserList from '../components/UserList.vue'

export const routes = [// {
//   path: '/todo-list',
//   name: 'todos',
//   component: TodoList,
//   meta: {
//     requiresAuth: true
//   }
// },
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/user-list',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: Error404
  },
  {
    path: '*',
    redirect: '/404'
  }
]
