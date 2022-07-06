// function marsExploration(s) {
//   s = s.toLowerCase()
//   const idx = num => num % 3
//   const sos = "sos"
//   let changed = []
//   for (let i = 0; i < s.length; i++) {
//     const sosIdx = idx(i)
//     if (s[i] !== sos[sosIdx]) changed.push(s[i])
//   }
//   return changed.length
// }

// console.log(marsExploration("SOSTOT"))
// console.log(marsExploration("SOSSPSSQSSOR"))

function hackerrankInString(s) {
  // Write your code here
  s = s.toLowerCase()
  let hRank = "hackerrank"
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === hRank[0]) {
      hRank = hRank.substring(1, hRank.length)
    }
  }
  return hRank.length === 0 ? "YES" : "NO"
}

console.log(hackerrankInString("hhaacckkekraraannk"))
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"))