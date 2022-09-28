import {
  describe, expect, it
} from 'vitest';
import { mount } from '@vue/test-utils';
import Props from '@/components/Props.vue';

describe('props测试示例', () => {
  it('测试name传值', async () => {
    const name = '张三';
    const newName = '李四';
    const wrapper = mount(Props, {
      // 往子组件传递name值
      propsData: {
        name
      }
    });
    expect(wrapper.find('.name').text()).toBe(name);
    await wrapper.setProps({ name: newName }) // 中途修改props的值
    expect(wrapper.find('.name').text()).toBe(newName);
  });
});
