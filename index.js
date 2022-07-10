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

// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))

function climbingLeaderboard2(ranked, player) {
  // Write your code here
  let posMap = {}
  const posList = []
  const scoresToPos = scores => {
    const set = [...new Set(scores)].sort((a, b) => b - a)
    set.map((score, idx) => posMap[score] = idx + 1)
    return posMap
  }
  const start = Date.now()
  while (player.length > 0) {
    const currentScore = player.shift()
    const temp = [...ranked, currentScore]
    scoresToPos(temp)
    posList.push(posMap[currentScore])
    posMap = {}
  }
  console.log(Date.now() - start)
  return posList
}

function climbingLeaderboard(ranked, player) {
  const positions = []
  const set = [...new Set(ranked)]
  const start = Date.now()
  for (let score of player) {
    const pos = explorePosition(set, set.length + 1, score)
    positions.push(pos)
  }
  console.log("TimeLapse", Date.now() - start)
  return positions
} 

const explorePosition = (set, position, score, memo={}) => {
  for (score in memo) return memo[score]
  if (position === 0) return 1
  if (score < set[position - 1]) return position + 1
  --position
  memo[score] = explorePosition(set, position, score)
  return memo[score]
}

function climbingLeaderboard3(ranked, player) {
  const set = [...new Set(ranked)]
  const map = {}
  set.forEach((num, idx) => map[num] = idx + 1)
  let low = 0
  let high = ranked.length - 1
  let item = player[2]
  const positions = []
  // todo use binary search
  while (low <= high) {
    console.log(ranked, [low, high])
    const mid = Math.floor((low + high) / 2)
    const guess = ranked[mid]

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }

  }

  return map
}

console.log(climbingLeaderboard3([100,90,90,80], [70,80,90,105]))
// console.log(climbingLeaderboard3([100,100,50,40,40,20,10], [5,25,50,120]))
// console.log(climbingLeaderboard3([100,90,90,80,75,60], [50,65,77,90,102]))

// ranking = ranking.split(" ")
// player  = player.split(" ")
// console.log(climbingLeaderboard2(ranking, player))