class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const getNodeValueRecursive = (head, index, count=0) => {
  if (head === null) return null
  if (count === index) return head.val
  ++count
  return getNodeValueRecursive(head.next, index, count)
}

const getNodeValueIterative = (head, index) => {
  let current = head
  while (current) {
    if (index === 0) return current.val
    --index
    current = current.next
  }
  return null
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

a.next = b
b.next = c
c.next = d

console.log(getNodeValueRecursive(a, 4))
console.log(getNodeValueIterative(a, 4))