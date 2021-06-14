<template>
  <div>
    <h1 class="h-1">
      Sign Up
    </h1>
    <div class="app-form">
      <AppInput type="text"
                label="Full name"
                form="signUpCredentials"
                field="fullName"
                :validator="validateFullName" />
      <AppInput type="text"
                label="Email"
                form="signUpCredentials"
                field="email"
                :validator="validateEmail" />
      <AppInput type="password"
                label="Password"
                form="signUpCredentials"
                field="password"
                :validator="validatePassword" />
      <AppInput type="password"
                label="Repeat password"
                form="signUpCredentials"
                field="repeatPassword"
                :validator="validatePassword" />
      <AppButton @click="signUp" v-touch="signUp"><span>Sign Up</span></AppButton>
      <div class="app-form-error">
        <span>
          {{signUpAPIError}}
        </span>
      </div>
    </div>
    <div class="form-bottom">
      <span>Already have an account?</span>
      <router-link to="/signin"><span class="inline-link">Sign In</span></router-link>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import * as validators from '../validators.js'

  export default {
    name: 'EnterScreen',
    computed: {
      ...mapGetters(['signUpAPIError', 'signUpCredentials'])
    },
    methods: {
      ...mapActions(['signUp']),
      validateFullName: validators.validateFullName,
      validateEmail: validators.validateEmail,
      validatePassword: validators.validatePassword,
    }
  }
</script>