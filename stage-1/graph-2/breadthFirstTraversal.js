const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

const breadthFirstTraversal = (graph, start) => {
  const queue = [ start ]

  while (queue.length > 0) {
    const current = queue.shift()
    console.log(current)

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}

breadthFirstTraversal(graph, "a")