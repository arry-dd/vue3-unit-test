<template>
  <div>
    <button class="add" @click="add">点我</button>
    <p class="count">{{count}}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
function add() {
  count.value++;
}
</script>

<style lang="scss" scoped>

</style>