<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/logo.png">
    <div>数字是：{{count}}</div>
    <button @click="handlePlus">+</button>
    <button @click="handleMinus">-</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handlePlus() {
      this.count++;
    },
    handleMinus() {
      this.count--;
    }
  }
}
</script>

<style>

</style>