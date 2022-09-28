import {
  describe, expect, it
} from 'vitest';
import { mount } from '@vue/test-utils';
import Count from '@/components/Count.vue';

describe('trigger测试示例', () => {
  it('测试点击事件', async () => {
    const wrapper = mount(Count);
    await wrapper.find('.add').trigger('click'); // 触发click事件
    expect(wrapper.find('.count').text()).toBe('1');
  });
});
