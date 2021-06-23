<template>
  <div id="app">
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html {
    height: 100%;
  }

  body {
    background-color: #FAF3F3;
    color: #3E4462;
    margin: 0 !important;
    height: 100%;
  }

  #app {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .page {
    width: 100%;
    height: 100%;
    max-height: 900px;
    max-width: 420px;
    padding: 2em;
  }

  .h-1 {
    font-weight: 800;
    font-size: 22px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #181C43;
  }

  .h-2 {
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.02em;
  }

  .app-form {
    margin: 2em 0;
    background-color: #FFFFFF;
    border-radius: 40px;
    padding: 1.5em;
  }

  .app-form-error {
    text-align: center;
    font-size: 12px;
    color: #FF6683;
  }

  .form-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1E1A3E;
  }

  .inline-link {
    color: #1E1A3E;
  }

  .router-link--no-underline {
    text-decoration: none;
  }
</style>
