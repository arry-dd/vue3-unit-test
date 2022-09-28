import {
  describe, expect, it
} from 'vitest';
import { mount } from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('测试示例', () => {
  it('登录', async () => {
    const wrapper = mount(Login);
    wrapper.find('.account').setValue('123'); // 填写账号
    wrapper.find('.password').setValue('1234'); // 填写密码
    wrapper.find('.login').trigger('click'); // 点击登录
    expect(wrapper.emitted('loginSuccess')[0]).toEqual([]);
  });
});
