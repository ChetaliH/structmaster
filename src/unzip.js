function unzip(array) {
    const maxLength = Math.max(...array.map(group => group.length));
    const result = Array.from({ length: maxLength }, (_, i) => {
      return array.map(group => group[i]);
    });
    return result;
  }
  
  module.exports = unzip;
  