// function closestNumbers(numbers) {
//   const memo = {}
//   const cache = {}
//   let mins = [], finalMins = []
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i]
//     const remaining = numbers.filter(num => num !== number)
//     memo[number] = []
//     const diffs = [] 
//     for (let j = 0; j < remaining.length; j++) {
//       const other = remaining[j]
//       const diff = Math.abs(other - number)
//       diffs.push({diff, nums: [number, other]})
//     }
//     memo[number] = diffs.sort((a, b) => a.diff - b.diff)
//   }
//   mins = Object.keys(memo).map(key => memo[key][0])
//   const minDiff = mins.map(min => min.diff)
//   const minNum = Math.min(...minDiff)
//   finalMins = mins.filter(min => min.diff === minNum)
//   finalMins = finalMins.map(fMin => {
//     let ordered = fMin.nums.sort((a, b) => a - b).join(",")
//     return ordered
//   })
//   const unique = [...new Set(finalMins)]
//   const formatted = unique
//   .map(str => str.split(",").join(" "))
//   .map(num => console.log(num))
// }

// console.log(closestNumbers([6,2,4,10]))

// const countIterative = num => {
//   let count = 0

//   for (let i = 0; i <= num; i++) {
//     count += i
//   }
//   return count
// }

// const countRecursive = (num, count=0) => {
//   if (num === 0) return count
//   count += num
//   return countRecursive(num - 1, count)
// }


// console.log(countIterative(10))
// console.log(countRecursive(10))

const findLargest = (list, largest=0) => {
  for (let num of list) {
    if (num > largest) largest = num
  }
  return largest
}

const findLargestRecursive = (list, largest=0) => {
  if (list.length === 0) return largest
  if (largest < list[0]) largest = list[0]
  list.shift()
  return findLargestRecursive(list, largest)
}

console.log(findLargest([3,4,9,23,4, -2,45]))
console.log(findLargestRecursive([3,4,9,23,4, -2,45]))