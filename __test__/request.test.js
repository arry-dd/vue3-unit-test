import {
  describe, expect, it, vi
} from 'vitest';
import { mount } from '@vue/test-utils';
import Request from '@/components/Request.vue';
import flushPromises from 'flush-promises';

vi.mock('@/api/request.js'); // mock接口

describe('请求测试示例', () => {
  it('测试异步请求', async () => {
    const wrapper = mount(Request);
    await wrapper.find('.btn').trigger('click'); // 触发click事件
    await flushPromises(); // 等待异步完成
    expect(wrapper.find('.name').text()).toBe('李四');
  });
});
