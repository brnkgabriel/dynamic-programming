class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const treeIncludes = (root, node, memo={}) => {
  if (!root) return false
  if (root.val in memo) return memo[root]
  if (root.val === node.val) return true


  const leftNode = treeIncludes(root.left, node)
  const rightNode = treeIncludes(root.right, node)
  const isIncluded = leftNode || rightNode
  memo[root] = isIncluded
  return memo[root]
}

const treeIncludesRecursive = (root, target) => {
  if (!root) return false
  if (root.val === target) return true

  return treeIncludesRecursive(root.left, target) || treeIncludesRecursive(root.right, target)
}

const treeIncludesIterative = (root, target) => {
  if (!root) return false
  const queue = [ root ]

  while(queue.length > 0) {
    const current = queue.shift()
    
    if (current.val === target) return true

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return false
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
const g = new Node("g")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeIncludesRecursive(a, "h"))