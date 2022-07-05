const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSum(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }
  memo[targetSum] = null
  return null
}

console.log(howSum(7, [2, 3])) // true
console.log(howSum(7, [5, 3, 4, 7])) // true
console.log(howSum(7, [2, 4])) // false
console.log(howSum(8, [2, 3, 5])) // true
console.log(howSum(300, [7, 14])) // false