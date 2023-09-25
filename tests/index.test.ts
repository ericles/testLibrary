// index.test.ts
import { greet } from '../index'; 

describe('greet function', () => {
  it('should return "Hello, World!"', () => {
    const result = greet();
    expect(result).toBe('Hello, World!');
  });
});
