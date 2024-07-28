//Unique value extraction
// unique.js

// Function to extract unique values from an array
function unique(arr) {
    return [...new Set(arr)];
}

module.exports = unique;
