import Vue from 'vue'
import Vuex from 'vuex'
import {router} from './main.js'
import * as validators from './validators.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    apiUrl: 'https://limitless-badlands-68204.herokuapp.com/',
    user: {},
    userLoggedIn: false,
    signUpCredentials: {
      fullName: '',
      email: '',
      password: '',
      repeatPassword: ''
    },
    signInCredentials: {
      email: '',
      password: ''
    },
    signUpAPIError: null,
    signInAPIError: null,
  },
  getters: {
    user: state => state.user,
    userLoggedIn: state => state.userLoggedIn,
    signUpCredentials: state => state.signUpCredentials,
    signInCredentials: state => state.signInCredentials,
    signUpAPIError: state => state.signUpAPIError,
    signInAPIError: state => state.signInAPIError,
  },
  mutations: {
    SET_CREDENTIALS(state, payload) {
      state[payload.form][payload.field] = payload.value
    },
    SIGN_UP(state) {
      if (!state.signUpCredentials.fullName || !state.signUpCredentials.email || !state.signUpCredentials.password || !state.signUpCredentials.repeatPassword) {
        state.signUpAPIError = 'All fields are required'
        return
      }
      if (validators.validateFullName(state.signUpCredentials.fullName)) {
        state.signUpAPIError = 'Full name should be at least 2 characters long'
        return
      }
      if (validators.validateEmail(state.signUpCredentials.email)) {
        state.signUpAPIError = 'Incorrect email format'
        return
      }
      let passwordError = validators.validatePassword(state.signUpCredentials.password)
      if (passwordError) {
        state.signUpAPIError = passwordError + ' in your password'
        return
      }
      if (state.signUpCredentials.password !== state.signUpCredentials.repeatPassword) {
        state.signUpAPIError = 'Passwords don’t match'
        return
      }

      state.signUpAPIError = null

      fetch(state.apiUrl + 'register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					name: this.state.signUpCredentials.fullName,
					email: this.state.signUpCredentials.email,
					password: this.state.signUpCredentials.password
				})
			})
			.then(response => response.json())
			.then(data => {
				if (data === 'All fields are required' ||
            data === 'A profile with this email already exists' ||
            data === 'There was a problem with our server') state.signUpAPIError = data
        else {
          state.signUpAPIError = null
          state.user = data
          state.userLoggedIn = true
          router.push({path: '/home'})
				}
			})
			.catch(err => {
        state.signUpAPIError = 'Couldn’t reach server'
        console.log(err)
      })
    },
    SIGN_IN(state) {
      if (!state.signInCredentials.email || !state.signInCredentials.password) {
        state.signInAPIError = 'All fields are required'
        return
      }
      if (validators.validateEmail(state.signInCredentials.email)) {
        state.signInAPIError = 'Incorrect email format'
        return
      }

      state.signInAPIError = null

      fetch(state.apiUrl + 'signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInCredentials.email,
          password: this.state.signInCredentials.password
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data === 'Both fields are required' || data === 'Error logging in' || data === 'Wrong username or password') state.signInAPIError = data
        else {
          state.signInAPIError = null
          state.user = data
          state.userLoggedIn = true
          router.push({path: '/home'})
        }
      })
      .catch(err => {
        state.signInAPIError = 'Server is unavailable'
        console.log(err)
      })
    },
    SIGN_OUT(state) {
      state.user = {}
      state.userLoggedIn = false
      router.push({path: '/'})
    }
  },
  actions: {
    signUp({commit}) {
      setTimeout(() => commit('SIGN_UP'), 100)
    },
    signIn({commit}) {
      setTimeout(() => commit('SIGN_IN'), 100)
    },
    signOut({commit}) {
      commit('SIGN_OUT')
    }
  }
})