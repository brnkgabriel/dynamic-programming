const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

const hasPathRecursive = (graph, src, dst) => {
  if (src === dst) return true

  for (let neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst) === true) {
      return true
    }
  }

  return false
}

console.log(hasPathRecursive(graph, "j", "f"))

// const hasPathIterative = (graph, src, dst) => {
//   const queue = [ src ]

//   while (queue.length > 0) {
//     const current = queue.shift()
//     if (current === dst) return true

//     for (let neighbors of graph[current]) {
//       queue.push(neighbors)
//     }
//   }

//   return false
// }

// console.log(hasPathIterative(graph, "j", "g"))