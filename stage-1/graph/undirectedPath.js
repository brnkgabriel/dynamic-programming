const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"]
]

const buildGraph = edges => {
  const graph = {}
  for (let edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const hasPath = (graph, src, dst, visited = new Set()) => {
  if (visited.has(src)) return false
  if (src === dst) return true

  visited.add(src)

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true
    }
  }

  return false
}

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB)
}

console.log(undirectedPath(edges, "j", "0"))