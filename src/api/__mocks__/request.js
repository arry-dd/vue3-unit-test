import { vi } from 'vitest';

export const getList = vi.fn(
  () => new Promise(resolve => {
    resolve({
      data: {name: '李四'}
    });
  }),
)
