<template>
  <div>
    <h1 class="h-1">
      Ready for a&nbsp;great user&nbsp;experience?
    </h1>
    <h2 class="h-2">
      Bring your media to the&nbsp;next level!
    </h2>
    <div class="enter-screen-controls">
      <router-link to="/signup">
       <AppButton :light="true" :compact="true"><span>Sign Up</span></AppButton>
      </router-link>
      <router-link to="/signin">
        <AppButton :compact="true"><img src="../assets/arrow.svg"></AppButton>
      </router-link>
    </div>
    <GraphicsEnterScreen />
  </div>
</template>

<script>
  export default {
    name: 'EnterScreen'
  }
</script>

<style scoped>
  .enter-screen-controls {
    display: flex;
    justify-content: center;
  }
</style>