import {
  describe, expect, it, beforeAll, afterEach
} from 'vitest';

import { setActivePinia, createPinia } from 'pinia'
import { useUserInfo } from '@/store/userinfo';

describe('pinia测试示例', () => {
  let store = null;
  beforeAll(() => {
    setActivePinia(createPinia()); // 激活pinia
    store = useUserInfo()
  })

  afterEach(() => {
    store.$reset(); // 每次测试后，重置一下
  })

  it('测试changeUserInfo', () => {
    store.changeUserInfo('李四', 15);
    expect(store.name).toBe('李四');
    expect(store.age).toBe(15);
  });

  it('测试doubleAge', () => {
    // 修改age的值
    store.$patch({
      age: 16
    });
    expect(store.doubleAge).toBe(32);
  });
});
