<template>
  <h2 class="heading"> I am {{ reversedMessage }}</h2>
  <input v-model="message" type="text" placeholder="Enter your name"/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MyMessageComponent',
    data() {
      return {
        message: 'Hello Vue!',
        reversedMessage:'Hello Vue!'.split('').reverse().join('')
      }
    },
    watch: {
      message(newValue : string, oldValue : string) {
        this.reversedMessage = newValue.split('').reverse().join('')
      }
    },
    setup() {
      console.log('setup hook triggered!')
      return {}
    },
    beforeCreate() {
      console.log('beforeCreate hook triggered!')
    },
    created() {
      console.log('created hook triggered!')
    },
    beforeMount() {
      console.log('beforeMount hook triggered!')
    },
    mounted() {
      console.log('mounted hook triggered!')
    },
    beforeUpdate() {
      console.log('beforeUpdate hook triggered!')
    },
    updated() {
      console.log('updated hook triggered!')
    },
    beforeUnmount() {
      console.log('beforeUnmounted hook triggered!')
    }
  });
</script>

<style>
  .heading {
    font-size:16px;
  }
</style>
