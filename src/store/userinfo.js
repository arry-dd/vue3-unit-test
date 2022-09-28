import { defineStore } from 'pinia'

export const useUserInfo =  defineStore('userinfo', {
  state() {
    return {
      name: '张三',
      age: 14
    }
  },
  getters: {
    doubleAge: (state) => state.age * 2,
  },
  actions: {
    changeUserInfo(name, age) {
      this.name = name;
      this.age = age;
    },
  },
})