<template>
  <div>
    <section>
      <input class="account" v-model="account" type="text" placeholder="请输入账号">
    </section>

    <section>
      <input class="password" v-model="password" type="password" placeholder="请输入密码">
    </section>

    <section>
      <button class="login" @click="login">登录</button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const account = ref('');
const password = ref('');
const emit = defineEmits(['loginSuccess', 'loginFail']);

function login() {
  if(account.value === '123' && password.value === '1234') {
    emit('loginSuccess');
  } else {
    emit('loginFail');
  }
}
</script>

<style lang="scss" scoped>
</style>