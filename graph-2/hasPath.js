const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: []
}

const hasPathBF = (graph, src, dst) => {
  const stack = [ src ]

  while (stack.length > 0) {
    const current = stack.shift()
    if (current === dst) return true

    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }

  return false
}

const hasPathDF = (graph, src, dst) => {
  if (src === dst) return true

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) {
      return true
    }
  }
  return false
}


console.log(hasPathBF(graph, "k", "f"))