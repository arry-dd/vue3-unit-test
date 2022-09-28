import {
  describe, expect, it, vi
} from 'vitest';
import { mount } from '@vue/test-utils';
import UserInfo from '@/components/UserInfo.vue';
import { createPinia } from 'pinia';
import flushPromises from 'flush-promises';
import { actions } from '@/store/userinfo.js';
const pinia = createPinia()

vi.mock('@/store/userinfo.js'); // mock

describe('测试示例', () => {
  it('vue中的pinia测试', async () => {
    const wrapper = mount(UserInfo, {
      global: {
        plugins: [pinia] // 安装pinia
      }
    });
    expect(wrapper.find('.name').text()).toBe('姓名: 张三');
    expect(wrapper.find('.age').text()).toBe('年龄: 14');
    expect(wrapper.find('.doubleAge').text()).toBe('两倍年龄: 28');

    wrapper.find('.change').trigger('click'); // 改变store
    await flushPromises();
    expect(actions.changeUserInfo).toHaveBeenLastCalledWith('李四', 15); // 断言被调用的参数
  });
});
