/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
      let dp = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let j = 0; j < n; j++) dp[0][j] = 1;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};



var uniquePaths = function(m, n) {
    // 1. Initialize the DP table (Memoization cache)
    // Creates an m x n grid filled with -1 to indicate uncalculated cells.
    let dp = Array.from({ length: m }, () => Array(n).fill(-1));

    // 2. Define the recursive helper function
    // x and y represent the current coordinates of the grid
    let fn = (x, y) => {
        // Base Case 1: Reached the starting point. 
        // There is exactly 1 way to be at the start.
        if (x == 0 && y == 0) return 1;

        // Base Case 2: Out of bounds. 
        // If we go off the top or left edge of the grid, there are 0 paths.
        if (x < 0 || y < 0) return 0;

        // 3. Memoization Check
        // If the value for this cell isn't -1, we've already calculated it. 
        // Return the cached value immediately.
        if (dp[x][y] != -1) return dp[x][y];

        // 4. The Recurrence Relation
        // The number of paths to the current cell (x, y) is the sum of the paths 
        // from the cell directly above it (x - 1, y) and the cell to its left (x, y - 1).
        return dp[x][y] = fn(x - 1, y) + fn(x, y - 1);
    }
    
    // 5. Start the recursion from the destination cell
    return fn(m - 1, n - 1);
};