// let counter = 0
// const recursion = () => {
//   if (counter > 4) {
//     return "Hello World!"
//   }
//   counter++
//   return recursion()
// }

// console.log(recursion())

// const memoization = (n, cache={}) => {
//   if (n in cache) {
//     return cache[n]
//   } else {
//     cache[n] = n + 10
//     return cache[n]
//   }
// }

// console.log(memoization(5))

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// const fibonacciIterative = (n) => {
//   let first = 0
//   let second = 1

//   let answer = 0

//   if (n < 1) {
//     return first
//   }

//   if (n === 1) {
//     return second
//   }

//   for (let i = 1; i < n; i++) {
//     answer = first + second

//     first = second
//     second = answer
//   }

//   return answer
// }

// const fibonacciRecursive = (n, cache = {}) => {
//   if (n in cache) return cache[n]
//   if (n < 2) return n

//   cache[n] = fibonacciRecursive(n - 1, cache) + fibonacciRecursive(n - 2, cache)
//   return cache[n]
// }

// console.log(fibonacciRecursive(50))

const factorialIterative = (n) => {
  let answer = 1

  for (let i = 2; i <= n; i++) {
    answer *= i
  }
  return answer
}

const factorialRecursive = (n, cache={}) => {
  if (n in cache) return cache[n]
  if (n < 2) return 1

  cache[n] = n * factorialRecursive(n - 1, cache)
  return cache[n]
}

console.log(factorialRecursive(5))