<template>
  <h1 :class="headerClasses.heading">{{title}}</h1>
  <br/>
  <p :class="headerClasses.description">{{description}}</p>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: "HeadingComponent",
    data() {
      return {
        title: 'Welcome to Vue Restaurant',
        description: 'A Vue.js project to learn Vue.js'
      };
    },
  })
</script>

<style module="headerClasses">
.heading {
  color: #178c0e;
  font-size:2em;
}

.description {
  color:#b76210;
  font-size:1em;
}
</style>
