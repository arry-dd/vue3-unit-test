import { defineStore } from 'pinia';
import { vi } from 'vitest';

export const state = {
  name: '张三',
  age: 14
}

export const actions = {
  changeUserInfo: vi.fn() // mock函数
}

export const useUserInfo = defineStore('userinfo', {
  state() {
    return state
  },
  getters: {
    doubleAge: (state) => state.age * 2,
  },
  actions
})