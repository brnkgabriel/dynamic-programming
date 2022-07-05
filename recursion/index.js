// const fibonacci = (num, array = [0, 1]) => {
//   while (num > 2) {
//     const [nextToLast, last] = array.slice(-2)
//     array.push(nextToLast + last)
//     num -= 1
//   }
//   return array
// }

// const fib = (num, array = [0, 1]) => {
//   if (num <= 2) return array
//   const [nextToLast, last] = array.slice(-2)
//   return fib(num - 1, [...array, nextToLast + last])
// }

// // console.log(fibonacci(9))

// // Without recursion
// const fibonacciPos = pos => {
//   if (pos <= 1) return pos
//   const seq = [0, 1]

//   for (let i = 2; i <= pos; i++) {
//     const [nextToLast, last] = seq.slice(-2)
//     seq.push(nextToLast + last)
//   }

//   return seq[pos]
// }

// // console.log(fibonacciPos(8))

// // With recursion
// const fibPos = pos => {
//   if (pos < 2) return pos
//   return fibPos(pos - 1) + fibPos(pos - 2)
// }

// const fibPos1L = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2)

// // console.log(fibPos(8))
// // console.log(fibPos1L(50))

// // Real-Life Examples:

// // 1) Continuation token from an API
// const getAWSProductIdImages = async() => {
//   // get the data with await fetch request

//   if (data.IsTruncated) {
//     // recursive
//     return await getAWSProductIdImages(
//       productId,
//       s3,
//       resultArray,
//       data.NextContinationToken
//     )
//   }

//   return resultArray
// }

// // 2) A Parser:
// // a company directory
// // a file directory
// // the DOM - a web crawler
// // An XML or JSON data export

// const artistsByGenre = {
//   jazz: ["Miles Davis", "John Coltrane"],
//   rock: {
//     classic: ["Bob Seger", "The Eagles"],
//     hair: ["Def Leppard", "Whitesnake", "Poison"],
//     alt: {
//       classic: ["Pearl Jam", "The Killers"],
//       current: ["Joywave", "Sir Sly"]
//     }
//   },
//   unclassified: {
//     new: ["Caamp", "Neil Young"],
//     classic: ["Seal", "Morcheeba", "Chris Stapleton"]
//   }
// }

// const getArtistNames = (dataObj, arr = []) => {
//   Object.keys(dataObj).forEach(key => {
//     if (Array.isArray(dataObj[key])) {
//       return dataObj[key].forEach(artist => {
//         arr.push(artist)
//       })
//     }
//     getArtistNames(dataObj[key], arr)
//   })
//   return arr
// }

// console.log(getArtistNames(artistsByGenre))

// const recursion = (counter = 0) => {
//   if (counter > 4) {
//     return "Hello World"
//   }
//   counter++
//   return recursion(counter)
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


const fibonacci = (n, memo={}) => {
  if (n in memo) return memo[n]
  if (n === 0 || n === 1) return 1

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  return memo[n]
}

const factorial = (n, memo={}) => {
  if (n in memo) return memo[n]
  if (n === 0 || n === 1) return 1

  memo[n] = n * factorial(n - 1, memo)
  return memo[n]
}

const permutation = (n, r) => {
  if (n < r || n < 1 || r < 1) return 1

  const numerator = factorial(n)
  const denominator = factorial(n - r)
  return numerator / denominator
}


const combination = (n, r) => {
  if (n < r || n < 1 || r < 1) return 1

  const numerator = factorial(n)
  const denominator = factorial(n - r) * factorial(r)
  return numerator / denominator
}

console.log(combination(12,4))
console.log(permutation(12,4))
console.log(permutation(11,4))