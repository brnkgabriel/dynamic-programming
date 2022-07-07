

const gridTravelerRecursive = (m, n, memo = {}) => {
  const pos = m + "," + n
  if (pos in memo) return memo[pos]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  memo[pos] = gridTravelerRecursive(m - 1, n, memo) + gridTravelerRecursive(m, n - 1, memo)
  return memo[pos]
}

// console.log(gridTravelerIterative(2, 3))
// console.log(gridTravelerRecursive(1, 1))
// console.log(gridTravelerRecursive(2, 3))
// console.log(gridTravelerRecursive(3, 2))
// console.log(gridTravelerRecursive(3, 3))
console.log(gridTravelerRecursive(3, 3))