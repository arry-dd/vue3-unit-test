import {
  describe, expect, it
} from 'vitest';
import { mount } from '@vue/test-utils';
import Slot from '@/components/Slot.vue';

describe('测试示例', () => {
  it('普通插槽', () => {
    const wrapper = mount(Slot, {
      slots: {
        default: '<div class="content">我是内容</div>' // 插槽内容
      }
    });
    expect(wrapper.find('.content').text()).toBe('我是内容');
  });
});
