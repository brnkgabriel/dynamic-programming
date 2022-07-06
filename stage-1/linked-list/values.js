class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const linkedListValuesIterative = (head) => {
  const values = []
  let current = head

  while (current) {
    values.push(current.val)
    current = current.next
  }
  return values
}

const linkedListValuesRecursive = (head) => {
  const values = []
  fillValues(head, values)
  return values
}

const fillValues = (head, values) => {
  if (head === null) return
  values.push(head.val)
  fillValues(head.next, values)
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b
b.next = c
c.next = d

// console.log(LLValues(a))

console.log(linkedListValuesIterative(a))
console.log(linkedListValuesRecursive(a))