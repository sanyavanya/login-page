<template>
  <div class="app-button" :class="{'app-button--light': light, 'app-button--compact': compact}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AppButton',
    props: ['light', 'compact']
  }
</script>

<style lang="scss" scoped>
  .app-button {
    margin: 1em .5em;
    color: #FFFFFF;
    background-color: #1E1A3E;
    border-radius: 50px;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 100ms;

    &:active {
      transform: scale(1.02);
      cursor: pointer;
    }

    span {
      padding: 1em 2em;
    }

    img {
      padding: 1em;
    }
  }

  .app-button--light {
    color: #000000;
    background-color: #FFFFFF;
  }

  .app-button--compact {
    width: fit-content;
  }
</style>