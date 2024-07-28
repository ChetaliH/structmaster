// unique.test.js
const unique = require('../src/unique');

test('extract unique values from an array of numbers', () => {
    const input = [1, 2, 2, 3, 4, 4, 5];
    const output = [1, 2, 3, 4, 5];
    expect(unique(input)).toEqual(output);
});

test('extract unique values from an array with one element', () => {
    const input = [1];
    const output = [1];
    expect(unique(input)).toEqual(output);
});

test('extract unique values from an empty array', () => {
    const input = [];
    const output = [];
    expect(unique(input)).toEqual(output);
});

test('extract unique values from an array of strings', () => {
    const input = ['a', 'b', 'b', 'c', 'a'];
    const output = ['a', 'b', 'c'];
    expect(unique(input)).toEqual(output);
});

test('extract unique values from an array with mixed types', () => {
    const input = [1, '1', 2, '2', 2];
    const output = [1, '1', 2, '2'];
    expect(unique(input)).toEqual(output);
});
