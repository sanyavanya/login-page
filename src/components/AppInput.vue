<template>
  <div class="app-input">
    <div class="app-input__label">
      <span>
        {{label}}
      </span>
    </div>
    <div class="app-input__input">
      <input class="app-input__field" :type="fieldType" @change="updateForm">
      <img src="../assets/unhide.svg" class="app-input__unhide" :class="{'app-input__unhide--active': fieldType === 'text'}" v-if="type === 'password'" @click="toggleType">
    </div>
    <div class="app-input__error" v-if="error">
      {{error}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppInput',
    props: ['type', 'label', 'form', 'field', 'validator'],
    data() {
      return {
        error: null,
        fieldType: ''
      }
    },
    computed: {
      modelForm() {
        return this.model.split('.')[0]
      },
      modelField() {
        return this.model.split('.')[1]
      }
    },
    methods: {
      toggleType() {
        this.fieldType = (this.fieldType === 'text') ? 'password': 'text'
      },
      updateForm(event) {
        let value = event.target.value
        if (this.validator) this.error = this.validator(value)

        this.$store.commit('SET_CREDENTIALS', {
          form: this.form,
          field: this.field,
          value: value
        })
      }
    },
    mounted() {
      this.fieldType = this.type;
    }
  }
</script>

<style lang="scss" scoped>
  .app-input {
    margin: 0 .5em 1.6em .5em;
    position: relative;
  }

  .app-input__label {
    font-weight: 600;
    font-size: 12px;
    margin-left: 1em;
    margin-bottom: .5em;
  }

  .app-input__input {
    position: relative;
  }

  .app-input__field {
    background-color: #F3F3FA;
    border-radius: 50px;
    border: none;
    padding: .7em 1em;
    width: 100%;
    box-sizing: border-box;
  }

  .app-input__unhide {
    position: absolute;
    margin: .7em;
    right: 0;
    top: 0;
    opacity: .4;
  }

  .app-input__unhide--active {
    opacity: 1;
  }

  .app-input__error {
    position: absolute;
    margin-top: .2em;
    font-size: 10px;
    color: #FF6683;
    width: 100%;
    text-align: center;
  }
</style>