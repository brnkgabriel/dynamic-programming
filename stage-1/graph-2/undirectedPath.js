const undirectedPathDF = (edges, src, dst) => {
  const graph = buildGraph(edges)
  return hasPathDF(graph, src, dst)
}

const hasPathDF = (graph, src, dst, visited = new Set()) => {
  if (src === dst) return true
  if (visited.has(src)) return false

  visited.add(src)

  for (let neighbor of graph[src]) {
    if (hasPathDF(graph, neighbor, dst, visited)) {
      return true
    }
  }
  return false
}

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

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"]
]

console.log(undirectedPathDF(edges, "j", "m"))