function zip(...arrays) {
    const maxLength = Math.max(...arrays.map(arr => arr.length));
    const result = Array.from({ length: maxLength }, (_, i) => {
      return arrays.map(arr => arr[i]);
    });
    return result;
  }
  
  module.exports = zip;
  