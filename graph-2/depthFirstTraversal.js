const depthFirstTraversal = (graph, start) => {
  const stack = [ start ]

  while (stack.length > 0) {
    const current = stack.pop()
    console.log(current)
    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

const depthFirstTraversalRec = (graph, start) => {
  console.log(start)
  for (let neighbor of graph[start]) {
    depthFirstTraversalRec(graph, neighbor)
  }
}

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

depthFirstTraversalRec(graph, "a")