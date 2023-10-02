import { testCanvas } from '../index';
import * as main from "../src/main";

describe('greet function', () => {
  it('should return data from the API', async () => {
    const result = await testCanvas();
    // console.log(result);

    // Expect that the result is not null or undefined
    expect(result).toBeDefined();
  });
});

// describe('test get bla', () => {
//   it('should return data from the API', async () => {
//     const result = await testCanvas();
//     // console.log(result);

//     // Expect that the result is not null or undefined
//     expect(result).toBeDefined();
//   });
// });

// describe('greet function', () => {
//   it('should return data from the API', async () => {
//     const result = await testCanvas();
//     // console.log(result);

//     // Expect that the result is not null or undefined
//     expect(result).toBeDefined();
//   });
// });