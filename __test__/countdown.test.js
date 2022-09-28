import {
  describe, expect, it, vi
} from 'vitest';
import { mount } from '@vue/test-utils';
import CountDown from '@/components/CountDown.vue';
import flushPromises from 'flush-promises';

describe('倒计时测试示例', () => {
  
  it('测试倒计时', async () => {
    const wrapper = mount(CountDown);

    vi.useFakeTimers(); // 启用模拟计时器

    await wrapper.find('.btn').trigger('click'); // 开启倒计时
    await flushPromises();
    expect(wrapper.find('.seconds').text()).toBe('5s');

    await vi.advanceTimersByTime(3000); // 倒计时快进3s
    await flushPromises();
    expect(wrapper.find('.seconds').text()).toBe('2s');

    vi.runAllTimers(); // 调用每个被创建的计时器，直到计时器队列为空
    await flushPromises();
    expect(wrapper.find('.seconds').text()).toBe('0s');

    vi.useRealTimers(); // 关闭模拟计时器
  });
});
