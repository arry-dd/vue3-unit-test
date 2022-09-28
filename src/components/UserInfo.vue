<template>
  <div>
    <p class="name">姓名: {{name}}</p>
    <p class="age">年龄: {{age}}</p>
    <p class="doubleAge">两倍年龄: {{doubleAge}}</p>
    <button class="change" @click="change">改变信息</button>
  </div>
</template>

<script setup>
import { useUserInfo } from '@/store/userinfo.js';
import { storeToRefs } from 'pinia';

const userinfo = useUserInfo();
const { name, age, doubleAge } = storeToRefs(userinfo);

function change() {
  userinfo.changeUserInfo('李四', 15);
}
</script>

<style lang="scss" scoped>

</style>