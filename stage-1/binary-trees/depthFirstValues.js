class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const depthFirstValuesIterative = (root) => {
  if (!root) return []

  const result = []
  const stack = [ root ]

  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current.val)

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }
  return result
}

const depthFirstValuesRecursive = (root) => {
  if (root === null) return []

  const leftValues = depthFirstValuesRecursive(root.left) // [b, d, e]
  const rightValues = depthFirstValuesRecursive(root.right) // [c, f]

  return [ root.val, ...leftValues, ...rightValues ]
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log("iterative", depthFirstValuesIterative(a))
console.log("recursive", depthFirstValuesRecursive(a))