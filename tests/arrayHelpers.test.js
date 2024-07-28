//We have to write tests..Later part of the project.
const { deepMerge, chunk, unique, zip, unzip} = require('../src');

describe('deepMerge', () => {
  test('should merge properties of source objects into the target object', () => {
    const target = { a: 1, b: 2 };
    const source1 = { b: 3, c: 4 };
    const source2 = { d: 5 };

    const result = deepMerge(target, source1, source2);
    expect(result).toEqual({ a: 1, b: 3, c: 4, d: 5 });
  });

  test('should perform deep merge', () => {
    const target = { a: 1, b: { x: 1, y: 2 } };
    const source = { b: { y: 3, z: 4 }, c: 5 };

    const result = deepMerge(target, source);
    expect(result).toEqual({ a: 1, b: { x: 1, y: 3, z: 4 }, c: 5 });
  });

  test('should handle nested objects correctly', () => {
    const target = { a: { b: { c: 1 } } };
    const source = { a: { b: { d: 2 } } };

    const result = deepMerge(target, source);
    expect(result).toEqual({ a: { b: { c: 1, d: 2 } } });
  });

  test('should overwrite non-object properties with object properties', () => {
    const target = { a: 1 };
    const source = { a: { b: 2 } };

    const result = deepMerge(target, source);
    expect(result).toEqual({ a: { b: 2 } });
  });

  test('should return the target if no sources are provided', () => {
    const target = { a: 1 };

    const result = deepMerge(target);
    expect(result).toEqual(target);
  });
});

describe('chunk', () => {
  test('should split an array into chunks of the specified size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const size = 3;

    const result = chunk(array, size);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
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

describe('zip', () => {
  test('should zip arrays of the same length', () => {
    const array1 = [1, 2, 3];
    const array2 = ['a', 'b', 'c'];
    const result = zip(array1, array2);
    expect(result).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });

  test('should zip arrays of different lengths', () => {
    const array1 = [1, 2];
    const array2 = ['a', 'b', 'c'];
    const result = zip(array1, array2);
    expect(result).toEqual([[1, 'a'], [2, 'b'], [undefined, 'c']]);
  });

  test('should handle empty arrays', () => {
    const array1 = [];
    const array2 = ['a', 'b', 'c'];
    const result = zip(array1, array2);
    expect(result).toEqual([[undefined, 'a'], [undefined, 'b'], [undefined, 'c']]);
  });
});

describe('unzip', () => {
  test('should unzip arrays of the same length', () => {
    const array = [[1, 'a'], [2, 'b'], [3, 'c']];
    const result = unzip(array);
    expect(result).toEqual([[1, 2, 3], ['a', 'b', 'c']]);
  });

  test('should unzip arrays of different lengths', () => {
    const array = [[1, 'a'], [2, 'b'], [undefined, 'c']];
    const result = unzip(array);
    expect(result).toEqual([[1, 2, undefined], ['a', 'b', 'c']]);
  });

  test('should handle empty arrays', () => {
    const array = [];
    const result = unzip(array);
    expect(result).toEqual([]);
  });
});
