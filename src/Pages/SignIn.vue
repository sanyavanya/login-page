<template>
  <div>
    <h1 class="h-1">
      Sign In
    </h1>
    <div class="app-form">
      <AppInput type="text"
                label="Email"
                form="signInCredentials"
                field="email"
                :validator="validateEmail" />
      <AppInput type="password"
                label="Password"
                form="signInCredentials"
                field="password" />
      <AppButton @click="signIn" v-touch="signIn"><span>Sign In</span></AppButton>
      <div class="app-form-error">
        <span>
          {{signInAPIError}}
        </span>
      </div>
    </div>
    <div class="form-bottom">
      <span>Don’t have an account yet?</span>
      <router-link to="/signup"><span class="inline-link">Sign Up</span></router-link>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import * as validators from '../validators.js'

  export default {
    name: 'EnterScreen',
    computed: {
      ...mapGetters(['signInAPIError', 'signInCredentials'])
    },
    methods: {
      ...mapActions(['signIn']),
      validateEmail: validators.validateEmail,
      validatePassword: validators.validatePassword,
    }
  }
</script>