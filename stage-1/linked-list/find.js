class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const findRecursive = (head, toFind) => {
  if (head === null) return false
  if (head.val === toFind) return true
  return findRecursive(head.next, toFind)
}

const findIterative = (head, target) => {
  let current = head

  while (current) {
    if (current.val === target) return true
    current = current.next
  }
  return false
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

a.next = b
b.next = c
c.next = d

console.log(findRecursive(a, 25))
console.log(findIterative(a, 2))