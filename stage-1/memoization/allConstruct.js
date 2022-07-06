// Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings
// The function should return a 2D array containing all the ways that the `target` can be constructed by concatenating elements of the `wordBank` array
// Each element of the 2D array should represent one combination that constructs the `target`
// You may reuse elements of `wordBank`

const allConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target]
  if (target.length === 0) return [[]]

  const result = []
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank, memo)
      const targetWays = suffixWays.map(way => [word, ...way])
      result.push(...targetWays)
    }
  }
  memo[target] = result
  return result
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))

// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))

// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))

console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]))