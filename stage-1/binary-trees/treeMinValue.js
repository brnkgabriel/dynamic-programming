class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const treeMinValueRecursive = (node) => {
  if (!node) return Infinity

  const left = treeMinValueRecursive(node.left)
  const right = treeMinValueRecursive(node.right)
  return Math.min(node.val, left, right)
}

const treeMinValue = (node) => {
  if (!node) return Infinity

  const queue = [ node ]
  
  let minVal = Infinity

  while (queue.length > 0) {
    const current = queue.shift()
    minVal = Math.min(current.val, minVal)
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return minVal
}

const a = new Node(5)
const b = new Node(11)
const c = new Node(3)
const d = new Node(4)
const e = new Node(15)
const f = new Node(12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeMinValueRecursive(a))