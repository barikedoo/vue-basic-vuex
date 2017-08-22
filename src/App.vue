<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>

    <button @click="asyncIncrease({by:100, duration:1000})">Async Increase</button>
    <button @click="asyncDecrease({by:50, duration:5000})">Async Decrease</button>

    <!-- Один и вариантов Two-way binding для computed -->
    <!-- <input type="text" :value="value" @input="updateValue"> -->

    <!-- Втовой вариант, используя get(), set() для computed -->
    <input type="text" v-model="value">

    <div>
      <p> {{ value }} </p>
    </div>
  </div>
</template>

<script>

import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {


  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
  },


  methods: {
    asyncIncrease(payload) {
      this.$store.dispatch('asyncIncrease', payload);
    },
    asyncDecrease(payload) {
      this.$store.dispatch('asyncDecrease', payload);
    }
  },

  //   updateValue(event) {
  //     this.$store.dispatch('updateValue', event.target.value);
  //   }
  // },


  computed: {

    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    }

  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
