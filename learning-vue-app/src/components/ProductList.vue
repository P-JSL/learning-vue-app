<template>
  <ProductComp v-bind="product"/>
</template>
<script lang="ts">
  import ProductComp from './ProductComp.vue'

  export default {
    name: 'ProductList',
    components: {
      ProductComp
    },
    data() {
      return {
        product: {
          type: String,
          //default: 'Child component',
          vaildator:value => value !== 'Child component',
          name: 'Red Sweater',
          price : 19.99
        }
      }
    },
    provide() { // child component에 전달하는 방법 - 안티패턴 간주
      return {
        selectedIds:[1]
      }
    }
  }
</script>
