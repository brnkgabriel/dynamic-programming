class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b
b.next = c
c.next = d

// a => b => c => d
// 
const printLinkedListIterative = (head) => {
  let current = head
  while (current) {
    console.log(current.val)
    current = current.next
  }
}

const printLinkedListRecursive = (node) => {
  if (node === null) return
  console.log(node.val)
  return printLinkedListRecursive(node.next)
}

// printLinkedListIterative(a)
printLinkedListRecursive(a)