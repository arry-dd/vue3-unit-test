<template>
  <div>
    <button class="btn" @click="clickMe">点我</button>
    <p class="name">{{name}}</p>
  </div>
</template>

<script setup>
import { getList } from '@/api/request.js'
import { ref } from 'vue';
const name = ref('');

async function clickMe() {
  const res = await getList();
  name.value = res.data.name;
}
</script>

<style lang="scss" scoped>

</style>