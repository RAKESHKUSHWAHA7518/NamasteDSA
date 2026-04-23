function topologicalSort(n, adj) {
  const visited = new Array(n).fill(false);
  const stack = [];

  function dfs(node) {
    visited[node] = true;

    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }

    stack.push(node);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) dfs(i);
  }

  return stack.reverse();
}
module.exports = { topologicalSort };