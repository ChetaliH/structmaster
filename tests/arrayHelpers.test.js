//We have to write tests..Later part of the project.
const { deepMerge, chunk, unique } = require('../src');

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
