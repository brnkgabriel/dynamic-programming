const fibIterative = (n) => {
  let count = 2
  let fib = [0, 1]
  while (count <= n) {
    fib[count] = fib[count - 1] + fib[count - 2]
    count++
  }
  return fib[n]
}

// memoization
// js object, keys will be arg to fn, value will be the return value
const fibRecursive = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = fibRecursive(n - 1, memo) + fibRecursive(n - 2, memo)
  return memo[n]
}

console.log(fibIterative(6))
console.log(fibRecursive(6))

console.log(fibIterative(7))
console.log(fibRecursive(7))

console.log(fibIterative(8))
console.log(fibRecursive(8))

console.log(fibIterative(50))
console.log(fibRecursive(50))