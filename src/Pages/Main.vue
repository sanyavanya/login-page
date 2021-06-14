<template>
  <div class="main">
    <h1 class="h-1 home-title">
      Hello, {{user.name}}!
    </h1>
    <AppButton :compact="true" @click="signOut" v-touch="signOut"><span>Sign Out</span></AppButton>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Main',
    methods: {
      ...mapActions(['signOut'])
    },
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-title {
    margin-top: 15vh;
  }
</style>