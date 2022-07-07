function appendAndDelete(s, t, k) {
  // Write your code here
  let sSplit = s.split("")
  let tSplit = t.split("")
  let toAdd = []
  let beginCollation = false

  for (let i = 0; i <= k; i++) {
    const bIdx = (k - 1) - i

    if (s[0] === t[0] && s[s.length - 1] !== t[t.length - 1]) {

      if (sSplit[i + 1] === tSplit[i + 1] && tSplit[i + 1] !== undefined) {
        sSplit.pop()
      }
      if (sSplit[i] === undefined) {
        sSplit.push(t[i])
      }

      if (s[i] !== t[i]) {
        beginCollation = true
      }
    }

    if (beginCollation) {
      toAdd.push(t[i])
    }


    // if t first character does not equal s first character
    // push all the characters of tsplit to add because
    // we're deleting all of s and putting all of t
    if (s[0] !== t[0] && i < t.length) {
      sSplit.pop()
      toAdd.push(tSplit[i])
      continue
    }

    if (s[0] !== t[0] && i >= t.length) {
      const idx = i - t.length
      sSplit.push(toAdd[idx])
    }

    sSplit = sSplit.filter(ch => ch !== undefined)
    console.log("sSplit", sSplit)
    // if it's the last index and characters match return "YES"
    if (i === k && sSplit.join("") === tSplit.join("")) {
      return "Yes"
    }

    // if it's the last index and characters don't match return "NO"
    if (i === k && sSplit.join("") !== tSplit.join("")) {
      return "No"
    }
  }
}

// console.log(appendAndDelete("aba", "aba", 7))
// console.log(appendAndDelete("ashley", "ash", 2))
// console.log(appendAndDelete("hackerhappy", "hackerrank", 9))
// console.log(appendAndDelete("abc", "def", 6))

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  const pairs = [], memo = {}
  for (let i = 0; i < ar.length; i++) {
    const aPair = ar[i]
    for (let j = i + 1; j < ar.length; j++) {
      const bPair = ar[j]
      const modulo = (aPair + bPair) % k
      if (modulo === 0) {
        const sorted = [aPair, bPair].sort((a, b) => a - b)
        // const str = sorted.join(",")
        // if (str in memo) continue
        // memo[str] = pairs.push(sorted)
        pairs.push(sorted)
      }
    }
  }
  return pairs.length
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))