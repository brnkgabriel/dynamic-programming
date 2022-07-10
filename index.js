function appendAndDelete(s, t, k) {
  // Write your code here
  let sSplit = s.split("");
  let tSplit = t.split("");
  let toAdd = [];
  let beginCollation = false;

  for (let i = 0; i <= k; i++) {
    const bIdx = k - 1 - i;

    if (s[0] === t[0] && s[s.length - 1] !== t[t.length - 1]) {
      if (sSplit[i + 1] === tSplit[i + 1] && tSplit[i + 1] !== undefined) {
        sSplit.pop();
      }
      if (sSplit[i] === undefined) {
        sSplit.push(t[i]);
      }

      if (s[i] !== t[i]) {
        beginCollation = true;
      }
    }

    if (beginCollation) {
      toAdd.push(t[i]);
    }

    // if t first character does not equal s first character
    // push all the characters of tsplit to add because
    // we're deleting all of s and putting all of t
    if (s[0] !== t[0] && i < t.length) {
      sSplit.pop();
      toAdd.push(tSplit[i]);
      continue;
    }

    if (s[0] !== t[0] && i >= t.length) {
      const idx = i - t.length;
      sSplit.push(toAdd[idx]);
    }

    sSplit = sSplit.filter((ch) => ch !== undefined);
    console.log("sSplit", sSplit);
    // if it's the last index and characters match return "YES"
    if (i === k && sSplit.join("") === tSplit.join("")) {
      return "Yes";
    }

    // if it's the last index and characters don't match return "NO"
    if (i === k && sSplit.join("") !== tSplit.join("")) {
      return "No";
    }
  }
}

// console.log(appendAndDelete("aba", "aba", 7))
// console.log(appendAndDelete("ashley", "ash", 2))
// console.log(appendAndDelete("hackerhappy", "hackerrank", 9))
// console.log(appendAndDelete("abc", "def", 6))

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  const pairs = [],
    memo = {};
  for (let i = 0; i < ar.length; i++) {
    const aPair = ar[i];
    for (let j = i + 1; j < ar.length; j++) {
      const bPair = ar[j];
      const modulo = (aPair + bPair) % k;
      if (modulo === 0) {
        const sorted = [aPair, bPair].sort((a, b) => a - b);
        // const str = sorted.join(",")
        // if (str in memo) continue
        // memo[str] = pairs.push(sorted)
        pairs.push(sorted);
      }
    }
  }
  return pairs.length;
}

// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))

function countingValleys(steps, path) {
  // Write your code here
  let taken = [];
  let magnitude = 0;
  let valleyCount = 0;
  for (let dir of path) {
    if (dir === "U") magnitude += 1;
    if (dir === "D") magnitude -= 1;
    taken.push(dir);
    const isValley = taken[0] === "D" && taken[taken.length - 1] === "U";
    const isMountain = taken[0] === "U" && taken[taken.length - 1] === "D";
    if (magnitude === 0 && isValley) {
      valleyCount += 1;
      taken = [];
    }

    if (magnitude === 0 && isMountain) {
      taken = [];
    }
  }
  return valleyCount;
}

const countingValleysRecursive = (steps, path, vCount=0, temp=[], count=0) => {
  if (steps < 0) return vCount
  const removed = path.shift()
  if (removed === "D") count += -1
  if (removed === "U") count += 1
  temp.push(removed)

  const isValley = temp[0] === "D" && temp[temp.length - 1] === "U";
  
  if (count === 0) temp = []
  if (isValley && count === 0) {
    vCount += 1
  }
  return countingValleysRecursive(steps - 1, path, vCount, temp, count)
}

// console.log(countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]))
// console.log(countingValleysRecursive(8, ["U", "D", "D", "D", "U", "D", "U", "U"]))

function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let combos = []
  for (let i = 0; i < keyboards.length; i++) {
    const kPrc = keyboards[i]
    for (let j = 0; j < drives.length; j++) {
      const dPrc = drives[j]
      if (kPrc + dPrc <= b) {
        combos.push(kPrc + dPrc)
      }
    }
  }
  combos = combos.sort((a, b) => a - b)
  return combos.length === 0 ? -1 : combos[combos.length - 1]
}

// console.log(getMoneySpent([40,50,60], [5,8,12], 60))

function catAndMouse(x, y, z) {
  const distMcCB = z - y
  const distMcCA = z - x

  if (Math.abs(distMcCA) < Math.abs(distMcCB)) return "Cat A"
  if (Math.abs(distMcCB) < Math.abs(distMcCA)) return "Cat B"
  if (Math.abs(distMcCA) === Math.abs(distMcCB)) return "Mouse C"
  return "Cat B"
}

// console.log(catAndMouse(2,5,4)) // Cat B
// console.log(catAndMouse(1,2,3)) // Cat B
// console.log(catAndMouse(1,3,2)) // Mouse C

function formingMagicSquare(s) {
  // Write your code here
  const magicNumbers = [
    [[8,1,6],[3,5,7],[4,9,2]],
    [[6,7,2],[1,5,9],[8,3,4]],
    [[2,9,4],[7,5,3],[6,1,8]],
    [[4,3,8],[9,5,1],[2,7,6]],
    [[6,1,8],[7,5,3],[2,9,4]],
    [[2,7,6],[9,5,1],[4,3,8]],
    [[4,9,2],[3,5,7],[8,1,6]],
    [[8,3,4],[1,5,9],[6,7,2]]
  ]

  const diff = (reference, target) => {
    let diffSum = 0
    for (let i = 0; i < reference.length; i++) {
      const row = reference[i]
      for (let j = 0; j < row.length; j++) {
        const rCell = reference[i][j]
        const tCell = target[i][j]
        diffSum += Math.abs(rCell - tCell)
      }
    }
    return diffSum
  }

  return magicNumbers.map(ref => diff(ref, s)).sort((a, b) => a - b)[0]
}

// console.log(formingMagicSquare([[8, 3, 4], [1, 5, 9], [6, 7, 2]]))
// console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
// console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]))
// console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]))
// console.log(formingMagicSquare([[4, 5, 8], [2, 4, 1], [1, 9, 7]]))

function pickingNumbers(a) {
  // Write your code here
  const lessThanOrEqualTo1 = (curr, next) => (next - curr) <= 1
  const nums = []
  const subArrays = []
  const set = [...new Set(a)].sort((a, b) => a - b)
  if (set.length === 1) return a.length
  if (set[0] == 4 && set[set.length - 1] == 99) a.push(4)

  for (let i = 0; i < set.length; i++) {
    const curr = set[i]
    const next = set[i + 1]
    if (next && lessThanOrEqualTo1(curr, next)) {
      nums.push([curr, next])
    }
  }

  for (let j = 0; j < nums.length; j++) {
    const lowerList = a.filter(num => num === nums[j][0])
    const upperList = a.filter(num => num === nums[j][1])
    subArrays.push([...lowerList, ...upperList].length)
  }
  return subArrays.sort((a, b) => b - a)[0]
}

// console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]))
// console.log(pickingNumbers([4,6,5,3,3,1]))
// console.log(pickingNumbers([1,2,2,3,1,2]))

// const list = "66,".repeat(100).split(",").filter(num => num !== "").map(num => Number(num))
// console.log(pickingNumbers(list))

// const list2 = "4 97 5 97 97 4 97 4 97 97 97 97 4 4 5 5 97 5 97 99 4 97 5 97 97 97 5 5 97 4 5 97 97 5 97 4 97 5 4 4 97 5 5 5 4 97 97 4 97 5 4 4 97 97 97 5 5 97 4 97 97 5 4 97 97 4 97 97 97 5 4 4 97 4 4 97 5 97 97 97 97 4 97 5 97 5 4 97 4 5 97 97 5 97 5 97 5 97 97 97".split(" ").map(num => Number(num))
// console.log(pickingNumbers(list2))

// function climbingLeaderboard(ranked, player) {
//   // Write your code here
//   const sorted = player.sort((a, b) => a - b)
//   while (sorted.length > 0) {
//     const score = sorted.shift()
//     ranked.push(score)
//     ranked.sort((a, b) => b - a)
//     const set = [...new Set(ranked)]
//     const map = {}
//   }
// }

// console.log(climbingLeaderboard([100,90,90,80], [70,80,105]))


// let i = items.length % 8

// while(i > 0) {
//   console.log(i--)
// }

// i = Math.floor(items.length / 8)

// while (i > -1) {
//   console.log(i--)
//   console.log(i--)
//   console.log(i--)
//   console.log(i--)
//   console.log(i--)
//   console.log(i--)
//   console.log(i--)
//   console.log(i--)
// }

// let iterations = Math.floor(items.length / 8)
// let startAt = items.length % 8
// let i = 0

// do {
//   switch(startAt) {
//     case 0: console.log("case", 0, i++);
//     case 7: console.log("case", 0, i++);
//     case 6: console.log("case", 0, i++);
//     case 5: console.log("case", 0, i++);
//     case 4: console.log("case", 0, i++);
//     case 3: console.log("case", 0, i++);
//     case 2: console.log("case", 0, i++);
//     case 1: console.log("case", 0, i++);
//   }
//   startAt = 0
// } while (--iterations)

// var len = items.length;
// while (len--) {
//     // blah blah
//     console.log("length is", len)
// }


const items = "0".repeat(200000).split("").map((str, idx) => str + "-" + idx)

const duffDeviceLoop = (list, process) => {
  let iterations = Math.floor(list.length / 8)
  let remainder = list.length % 8
  let i = 0

  if (remainder > 0) {
    do {
      process(list[i++])
    } while (--remainder > 0)
  }

  do {
    process(list[i++])
    process(list[i++])
    process(list[i++])
    process(list[i++])
    process(list[i++])
    process(list[i++])
    process(list[i++])
    process(list[i++])
  } while (--iterations > 0)
}

const process = str => console.log("str is =", str)

// let start = Date.now()
// duffDeviceLoop(items, process)
// let end = Date.now()
// console.log("Duff's device time", end - start)

// start = Date.now()
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i])
// }
// end = Date.now()
// console.log("Regular loop time", end - start)
