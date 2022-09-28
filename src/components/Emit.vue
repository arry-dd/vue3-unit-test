<template>
  <div>
    <button class="btn" @click="clickMe">点我</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['change'])
function clickMe() {
  emit('change', true)
}
</script>

<style lang="scss" scoped>

</style>