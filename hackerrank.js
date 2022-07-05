// const factorial = (num, memo = {}) => {
//   if (num in memo) return memo[num];
//   if (num === 0) return 1;

//   memo[num] = num * factorial(num - 1);
//   return memo[num];
// };

// function extraLongFactorials(n) {
//   let elFactorial = 0;

//   if (n < 21) elFactorial = factorial(n);
//   else {
//     let multiplier = 1;
//     for (let i = 21; i <= n; i++) {
//       multiplier *= i;
//     }

//     let factorialOf20 = factorial(20);
//     elFactorial = (BigInt(factorialOf20) * BigInt(multiplier))
//     .toLocaleString("fullwide", { useGrouping: false });

//   }
//   return elFactorial;
// }

// console.log(extraLongFactorials(45));

const unit = str => str.length - 1
const add = (strA, strB, carry) => {
  if (strA.length === 0) return ""

  const strAUnit = strA[unit(strA)]
  const strBUnit = strB[unit(strB)]

  const sum = Number(strAUnit) + Number(strBUnit) + Number(carry)
  const sumStr = sum.toString()

  let total = ""
  if (sumStr.length > 1) {
    carry = sumStr[0]
    total = unit(sumStr) + total
  } else {
    carry = 0
    total = sumStr + total
  }
  
  strA = strA.substring(0, strA.length - 1)
  strB = strB.substring(0, strB.length - 1)

  return add(strA, strB, carry) + total
} 
// const add = (strA, strB, carry, total) => {
//   if (strA.length === 0) return total

//   const strAUnit = strA[unit(strA)]
//   const strBUnit = strB[unit(strB)]

//   const sum = Number(strAUnit) + Number(strBUnit) + Number(carry)

//   const sumStr = sum.toString()
//   if (sumStr.length > 1) {
//     carry = sumStr[0]
//     total = unit(sumStr) + total
//   } else {
//     carry = 0
//     total = sumStr + total
//   }
  
//   strA = strA.substring(0, strA.length - 1)
//   strB = strB.substring(0, strB.length - 1)

//   return add(strA, strB, carry, total)
// } 

const addition = (numA, numB) => {
  const max = Math.max(numA, numB)
  let strA = numA.toString()
  let strB = numB.toString()
  let total = ""
  
  const diff = strA.length - strB.length

  // if diff is less than 0, strA has fewer digits than strB, pad strA
  if (diff < 0) strA = "0".repeat(Math.abs(diff)) + strA
  else strB = "0".repeat(Math.abs(diff)) + strB

  total = add(strA, strB, 0, "")

  return total
}

console.log(addition("2345","222444666699999999991234567888888866666774"))