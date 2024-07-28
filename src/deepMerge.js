function deepMerge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
  
    if (typeof target === 'object' && target !== null && typeof source === 'object' && source !== null) {
      for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null) {
          if (!target[key] || typeof target[key] !== 'object') {
            target[key] = {};
          }
          deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  
    return deepMerge(target, ...sources);
  }
  
  module.exports = deepMerge;
  