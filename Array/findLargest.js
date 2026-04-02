// Loop through the array and update max when a larger value is found.
// Return max.

function findLargest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;
  let max;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== 'number' || !Number.isFinite(value)) return false;
    if (max === undefined || value > max) max = value;
  }
  return max;
}
module.exports = { findLargest };