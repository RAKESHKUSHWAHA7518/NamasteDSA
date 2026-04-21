function countEvens(arr) {
  if (!Array.isArray(arr)) return false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== 'number' || !Number.isFinite(value)) return false;
    if (Number.isInteger(value) && value % 2 === 0) count++;
  }
  return count;
}

module.exports = { countEvens };