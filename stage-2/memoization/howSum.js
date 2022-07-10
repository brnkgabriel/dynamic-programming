const howSumRecursive = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let num of numbers) {
    const remainder = targetSum - num
    const remainderResult = howSumRecursive(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num]
      return memo[targetSum]
    }
  }
  memo[targetSum] = null
  return null
}


console.log("recursive", howSumRecursive(7, [2,3]))
console.log("recursive", howSumRecursive(7, [5,3,4,7]))
console.log("recursive", howSumRecursive(7, [2,4]))
console.log("recursive", howSumRecursive(8, [2,3,5]))
console.log(howSumRecursive(300, [7,14]))