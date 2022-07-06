const pad = (numA, numB) => {
  let strA = numA.toString()
  let strB = numB.toString()

  const diff = Math.abs(strA.length - strB.length)
  
  if (strA.length > strB.length) strB = "0".repeat(diff) + strB
  if (strB.length > strA.length) strA = "0".repeat(diff) + strA

  return { strA, strB }
}

const add = ({strA, strB}, carry=0) => {
  // base cases
  // if we're at the last character, return empty string
  // if we're at the second to the last character, return addition of both
  if (strA.length === 0 && strB.length === 0) return ""
  if (strA.length === 1 && strB.length === 1) return Number(strA) + Number(strB) + carry

  console.log("strA", strA, "strB", strB)
  const numALast = Number(strA[strA.length - 1])
  const numBLast = Number(strB[strB.length - 1])
  let sumLast = (numALast + numBLast + carry)
  carry = sumLast < 9 ? 0 : 1

  sumLast = sumLast.toString()
  const retain = sumLast[sumLast.length - 1]

  // reduce strA & strB by removing the last character
  strA = strA.substring(0, strA.length - 1)
  strB = strB.substring(0, strB.length - 1)

  return add({strA, strB}, carry) + retain
}

const addition = (numA, numB) => {
  const padded = pad(numA, numB)
  
  return add(padded)
}

console.log(addition(9999, 7))