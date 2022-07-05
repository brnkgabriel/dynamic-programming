class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const maxRootToLeaf = (root) => {
  if (!root) return -Infinity
  if (!root.left && !root.right) return root.val

  const maxChildPathSum = Math.max(maxRootToLeaf(root.left), maxRootToLeaf(root.right))

  return root.val + maxChildPathSum
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
console.log(maxRootToLeaf(a))