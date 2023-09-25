// index.test.ts
import { greet } from '../index'; 

// describe all tests i test suite with string
describe('greet function', () => {
//it defines an individual test. it takes a description string
// and a callback function
  it('should return "Hello, World!"', () => {
    const result = greet();
    //expect().toBe
    expect(result).toBe('Hello, World!');
    //will pass or fail
  });
});
