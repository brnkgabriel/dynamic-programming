

/****************************************************************************** fibonacci ******************************************************************/
// memoized fibonacci
// const fib = (n, memo = {}) => {
//   if (n in memo) return memo[n]
//   if (n <= 2) return 1

//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
//   return memo[n]
// }

// console.log(fib(50))

/****************************************************************************** gridTraveler ******************************************************************/
// const gridTraveler = (m, n, memo = {}) => {
//   const key = m + "," + n

//   if (key in memo) return memo[key]
//   if (m === 1 && n === 1) return 1
//   if (m === 0 || n === 0) return 0

//   memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
//   return memo[key]
// }

// console.log(gridTraveler(1, 1)) // 1
// console.log(gridTraveler(2, 3)) // 3
// console.log(gridTraveler(3, 2)) // 3
// console.log(gridTraveler(3, 3)) // 6
// console.log(gridTraveler(18, 18)) // 2333606220 
// 1, 1, 2, 3, 5, 8, 13
// const fibonacci = (n, memo = {}) => {
//   if (memo[n]) return memo[n]
//   if (n <= 2) return 1

//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
//   return memo[n]
// }

// console.log(fibonacci(50))

/****************************************************************************** canSum ******************************************************************/
// write a function `canSum(targetSum, numbers)` that takes in a targetSum and
// an array of numbers as arguments. 
// The function should return a boolean indicating whether or not it is possible
// to generate the targetSum using numbers from the array
// You may use an element of the array as many times as needed
// You may assume that all input numbers are nonnegative.

// const canSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum]
//   if (targetSum === 0) return true
//   if (targetSum < 0) return false

//   for (let num of numbers) {
//     const remainder = targetSum - num
//     if (canSum(remainder, numbers, memo)) {
//       memo[targetSum] = true
//       return true
//     }
//   }
//   memo[targetSum] = false
//   return false
// }

// console.log(canSum(7, [2, 3])) // true
// console.log(canSum(7, [5, 3, 4, 7])) // true
// console.log(canSum(7, [2, 4])) // false
// console.log(canSum(8, [2, 3, 5])) // true
// console.log(canSum(300, [7, 14])) // false

/****************************************************************************** howSum ******************************************************************/
// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an
// array of numbers as arguments

// The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the taretSum, then return null

// my implementation
// const howSum = (targetSum, numbers, arr = []) => {
//   if (targetSum === 0) return []
//   if (targetSum < 0) return null

//   for (let num of numbers) {
//     const remainder = targetSum - num
//     if (howSum(remainder, numbers, arr)) {
//       arr.push(num)
//       return arr
//     }
//   }
//   return null
// }

// console.log(howSum(7, [2, 3])) // true
// console.log(howSum(7, [5, 3, 4, 7])) // true
// console.log(howSum(7, [2, 4])) // false
// console.log(howSum(8, [2, 3, 5])) // true

// his implementation
// const howSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum]
//   if (targetSum === 0) return []
//   if (targetSum < 0) return null

//   for (let num of numbers) {
//     const remainder = targetSum - num
//     const remainderResult = howSum(remainder, numbers, memo)
//     if (remainderResult !== null) {
//       memo[targetSum] = [...remainderResult, num]
//       return memo[targetSum]
//     }
//   }
//   memo[targetSum] = null
//   return null
// }

// console.log(howSum(7, [2, 3])) // true
// console.log(howSum(7, [5, 3, 4, 7])) // true
// console.log(howSum(7, [2, 4])) // false
// console.log(howSum(8, [3, 2, 5])) // true
// console.log(howSum(300, [7, 14])) // null

/****************************************************************************** bestSum ******************************************************************/
// Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

// If there is a tie for the shortest combination, you may return any one of the shortest.

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestCombination = null

  for(let num of numbers) {
    const remainder = targetSum - num
    const remainderCombination = bestSum(remainder, numbers, memo)
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num]
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination
      }
    }
  }

  memo[targetSum] = shortestCombination
  return shortestCombination
}

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
console.log(bestSum(300, [7, 14])) // null