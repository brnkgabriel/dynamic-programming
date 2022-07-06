const canConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target]
  if (target.length === 0) return true
  if (target === null) return false

  for (let word of wordBank) {
    const idx = target.indexOf(word)
    if (idx === 0) {
      const remainder = target.replace(word, "")
      if (canConstruct(remainder, wordBank, memo)) {
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("victoria", ["ab", "to", "cd", "vic", "ria"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
  "e",
  "ee",
  "eee",
  "eeee",
  "eeeee",
  "eeeeee"
]))
// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
// The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of `wordBank` array
// You may reuse elements of `wordBank` as many times as needed.
