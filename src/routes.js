import EnterScreen from './Pages/EnterScreen.vue'
import SignUp from './Pages/SignUp.vue'
import SignIn from './Pages/SignIn.vue'
import Main from './Pages/Main.vue'

export const routes = [
  {
    path: '/',
    name: 'EnterScreen',
    component: EnterScreen
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/home',
    name: 'Main',
    component: Main,
    meta: {
      requiresAuth: true
    }
  }
]