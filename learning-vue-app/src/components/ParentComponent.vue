<template>
  <ChildComponent :name="children[0]"/>
</template>

<script lang="ts">
  import ChildComponent from './ChildComponent.vue'
  export default {
    name: 'ParentComponent',
    components: {
      ChildComponent
    },
    data() {
      return {
        children : ['Red Swearter','Blur T-Shirt', 'Green Hat']
      }
    }
  }
</script>
