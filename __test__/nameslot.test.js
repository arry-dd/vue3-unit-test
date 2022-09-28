import {
  describe, expect, it
} from 'vitest';
import { mount } from '@vue/test-utils';
import NameSlot from '@/components/NameSlot.vue';

describe('测试示例', () => {
  it('普通插槽', () => {
    const wrapper = mount(NameSlot, {
      slots: {
        header: '<div class="header">Header</div>',
        main: '<div class="content">Main Content</div>',
        footer: '<div class="footer">Footer</div>'
      }
    });
    expect(wrapper.find('.content').text()).toBe('Main Content');
    expect(wrapper.find('.header').text()).toBe('Header');
    expect(wrapper.find('.footer').text()).toBe('Footer');
  });
});
