import {
  describe, expect, it
} from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('测试示例', () => {
  it('hellow world', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.html()).toMatchSnapshot(); // 快照测试
    expect(wrapper.find('.name').text()).toBe('hello world!');
  });
});
