//Chunk function implementation
//Splits an array into chunks of a specified size.

function chunk(array, size) {
    // Check if the array and size are valid
    if (!Array.isArray(array)) {
      throw new TypeError('First argument must be an array');
    }
    if (typeof size !== 'number' || size <= 0) {
      throw new TypeError('Second argument must be a positive number');
    }
  
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  
  module.exports = chunk;