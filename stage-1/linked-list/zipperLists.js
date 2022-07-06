class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const zipperListsIterative = (head1, head2) => {
  let tail = head1
  let current1 = head1.next
  let current2 = head2
  let count = 0

  while (current1 && current2) {
    if (count % 2 === 0) {
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    tail = tail.next
    count++
  }

  if (current1 !== null) tail.next === current1
  if (current2 !== null) tail.next === current2

  return head1
}

const zipperListsRecursive = (head1, head2) => {
  if (head1 === null && head2 === null) return null
  if (head1 === null) return head2
  if (head2 === null) return head1

  const next1 = head1.next
  const next2 = head2.next
  head1.next = head2
  head2.next = zipperListsRecursive(next1, next2)

  return head1
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

const e = new Node("a")
const f = new Node("b")
const g = new Node("c")
const h = new Node("d")

a.next = b
b.next = c
c.next = d

e.next = f
f.next = g
g.next = h

// console.log(zipperListsIterative(a, e))

console.log(zipperListsRecursive(a, e))