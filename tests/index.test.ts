import { test } from '../index';

describe('greet function', () => {
  it('should return data from the API', async () => {
    const result = await test();
    // console.log(result);

    // Expect that the result is not null or undefined
    expect(result).toBeDefined();
  });
});
