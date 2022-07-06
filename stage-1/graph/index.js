
const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

// depth first traversal uses a stack
// const depthFirstPrint = (graph, source) => {
//   const stack = [source]

//   while(stack.length > 0) {
//     const current = stack.pop()
//     console.log(current)
//     for (let neighbor of graph[current]) {
//       stack.push(neighbor)
//     }
//   }
// }

// const depthFirstRecursivePrint = (graph, source) => {
//   console.log(source)
//   for (let neighbor of graph[source]) {
//     depthFirstRecursivePrint(graph, neighbor)
//   }
// }

// console.log(depthFirstRecursivePrint(graph, 'a')) // abdfce

// const breadthFirstPrint = (graph, source) => {
//   const queue = [ source ]

//   while (queue.length > 0) {
//     const current = queue.shift()
//     console.log(current)
//     for (neighbor of graph[current]) {
//       queue.push(neighbor)
//     }
//   }
// }

// console.log(breadthFirstPrint(graph, "a"))

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"]
]

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1]
]

const gridToEdges = grid => {
  const edges = []
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i]
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      if (i + 1 < grid.length) {
        const down = grid[i + 1][j]
        edges.push([cell, down])
      }
      if (j + 1 < row.length) {
        const right = grid[i][j + 1] 
        edges.push([cell, right])
      }
    }
  }
  return edges
}

const buildDirectedGraph = edges => {
  const graph = {}
  for (let edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    graph[a].push(b)
  }
  return graph
}

const buildUndirectedGraph = edges => {
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

const g2edg = gridToEdges(grid)
const directedGraph = buildDirectedGraph(g2edg)
const undirectedGraph = buildUndirectedGraph(g2edg)
console.log(directedGraph)