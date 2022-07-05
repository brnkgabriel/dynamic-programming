// const edges = [
//   ["w", "x"],
//   ["x", "y"],
//   ["z", "y"],
//   ["z", "v"],
//   ["w", "v"]
// ]

// const buildGraph = (edges) => {
//   const graph = {}

//   for (edge of edges) {
//     const [a, b] = edge
//     if (!(a in graph)) graph[a] = []
//     if (!(b in graph)) graph[b] = []
//     graph[a].push(b)
//     graph[b].push(a)
//   }
//   return graph
// }

// const shortestPath = (edges, src, dst) => {
//   const graph = buildGraph(edges)
//   const visited = new Set()

//   const path = Infinity
  
//   for (let node in graph) {
//     const count = explore(graph, node, dst, visited)
//   }
// }

// const explore = (graph, src, dst, visited) => {
//   if (visited.has(current)) return 0
//   if (src === dst) return 1

//   visited.add(current)

//   let count

//   for (let neighbor of graph[current]) {
    
//   }
// }

// console.log(shortestPath(edges, src, dst))