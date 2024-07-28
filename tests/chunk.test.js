const chunk = require('../src/chunk');

// Helper function to compare arrays
function arraysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// Test cases
try {
  // Test case 1: Regular case
  const result1 = chunk([1, 2, 3, 4, 5, 6, 7], 3);
  console.log(arraysEqual(result1, [[1, 2, 3], [4, 5, 6], [7]]) ? 'Pass' : 'Fail');

  // Test case 2: Size greater than array length
  const result2 = chunk([1, 2, 3], 5);
  console.log(arraysEqual(result2, [[1, 2, 3]]) ? 'Pass' : 'Fail');

  // Test case 3: Size of 1
  const result3 = chunk([1, 2, 3], 1);
  console.log(arraysEqual(result3, [[1], [2], [3]]) ? 'Pass' : 'Fail');

  // Test case 4: Empty array
  const result4 = chunk([], 3);
  console.log(arraysEqual(result4, []) ? 'Pass' : 'Fail');

  // Test case 5: Invalid size (should throw an error)
  try {
    chunk([1, 2, 3], -1);
    console.log('Fail');
  } catch (e) {
    console.log('Pass');
  }

  // Test case 6: Invalid array input (should throw an error)
  try {
    chunk('not an array', 3);
    console.log('Fail');
  } catch (e) {
    console.log('Pass');
  }

} catch (e) {
  console.error('Test failed', e);
}