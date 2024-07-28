// tests/chunk.test.js
const chunk = require('../src/chunk');

describe('chunk', () => {
  test('should split an array into chunks of the specified size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const size = 3;
    const result = chunk(array, size);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  test('should handle arrays that do not divide evenly', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const size = 3;
    const result = chunk(array, size);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });

  test('should handle arrays with a single element', () => {
    const array = [1];
    const size = 1;
    const result = chunk(array, size);
    expect(result).toEqual([[1]]);
  });

  test('should handle empty arrays', () => {
    const array = [];
    const size = 3;
    const result = chunk(array, size);
    expect(result).toEqual([]);
  });

  test('should throw a TypeError if the first argument is not an array', () => {
    expect(() => chunk('not an array', 3)).toThrow(TypeError);
  });

  test('should throw a TypeError if the second argument is not a positive number', () => {
    const array = [1, 2, 3, 4, 5];
    expect(() => chunk(array, -1)).toThrow(TypeError);
    expect(() => chunk(array, 0)).toThrow(TypeError);
    expect(() => chunk(array, 'not a number')).toThrow(TypeError);
  });
});
