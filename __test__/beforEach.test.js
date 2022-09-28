import {
  describe, expect, it, beforeEach, afterEach
} from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('测试示例', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(HelloWorld); // 挂载组件
  });

  // afterEach(() => {
  //   wrapper.destroy(); // 销毁组件
  // });

  it('hellow world', () => {
    expect(wrapper.find('.name').text()).toBe('hello world!');
  });
});
