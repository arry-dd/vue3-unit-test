import {
  describe, expect, it
} from 'vitest';
import { mount } from '@vue/test-utils';
import Emit from '@/components/Emit.vue';

describe('emit测试示例', () => {
  it('change事件触发测试', () => {
    const wrapper = mount(Emit);
    wrapper.find('.btn').trigger('click');
    expect(wrapper.emitted().change).toMatchObject([[true]]); // 获取change事件
  });
});
