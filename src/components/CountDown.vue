<template>
  <div>
    <button class="btn" @click="start">开启倒计时</button>
    <p class="seconds">{{seconds}}s</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const seconds = ref(0); // 倒计时的秒数
const timer = ref(null);

// 开启倒计时
function start() {
  if(seconds.value !== 0) return;
  clearInterval(timer.value);
  countDownCallback();
  timer.value = setInterval(countDownCallback, 1000);
}

function countDownCallback() {
  if (seconds.value === 0) {
    seconds.value = 5;
  } else if (seconds.value - 1 <= 0) {
    seconds.value = 0;
    clearInterval(timer.value);
  } else {
    seconds.value--;
  }
}

</script>

<style lang="scss" scoped>

</style>