class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const reverseListRecursive = (head, prev = null) => {
  if (head === null) return prev
  // pointer reassignment operation
  const next = head.next
  head.next = prev

  // shifting operation
  return reverseListRecursive(next, head)
}

const reverseListIterative = (head) => {
  let prev = null
  let current = head

  while (current) {
    // pointer-reassignment operation
    const next = current.next
    current.next = prev

    // shifting operation
    prev = current
    current = next
  }
  return prev
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

a.next = b
b.next = c
c.next = d

console.log("recursive", reverseListRecursive(a))
// console.log("iterative", reverseListIterative(a))