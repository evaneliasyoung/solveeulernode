const Problem = require('../Problem.js')
const BigInt = require('big-integer')

/**
* Solved 2018-10-17
* @type {Problem}
*/
const Problem10 = new Problem(
  'Problem 10',
  10,
  `The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.`,
  `Find the sum of all the primes below two million.`,
  () => {
    let sum = 0
    let pr = true
    for (let i = 2; i < 2000000; i++) {
      pr = true
      for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
        if (i % j === 0) {
          pr = false
          break
        }
      }
      if (pr) { sum += i }
    }
    return sum
  }
)

/**
* Unsolved
* @type {Problem}
*/
const Problem11 = new Problem(
  'In the 20×20 grid below, four numbers along a diagonal line have been marked in red.',
  11,
  `In the 20×20 grid below, four numbers along a diagonal line have been marked in red. The product of these numbers is 26 × 63 × 78 × 14 = 1788696.`,
  `What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20×20 grid?`,
  () => {},
  false
)
/**
* Solved 2018-10-17
* @type {Problem}
*/
const Problem12 = new Problem(
  'Highly divisible triangular number',
  12,
  `The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.`,
  `What is the value of the first triangle number to have over five hundred divisors?`,
  () => {
    let i = 1
    while (true) {
      let sum = i * (++i) / 2
      let divCnt = 0

      for (var j = 0; j <= Math.ceil(Math.sqrt(sum)); j++) {
        if (sum % j === 0) { divCnt += 2 }
        if (j ** 2 === i) { divCnt-- }
        if (divCnt > 500) { return sum }
      }
    }
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem13 = new Problem(
  'Title',
  13,
  `Description`,
  `Prompt`,
  () => {},
  false
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem14 = new Problem(
  'Longest Collatz sequence',
  14,
  `It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.`,
  `Which starting number, under one million, produces the longest chain?`,
  () => {
    let lonSeq = 0
    let lonLen = 0
    let curLen = 0
    let n = 0

    for (var i = 1; i < 1000000; i++) {
      curLen = 0
      n = i
      while (n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3 * n + 1
        curLen++
      }
      if (curLen > lonLen) {
        lonSeq = i
        lonLen = curLen
      }
    }
    return lonSeq
  }
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem15 = new Problem(
  'Lattice paths',
  15,
  `Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.`,
  `How many such routes are there through a 20×20 grid?`,
  () => {
    let gridSize = 20
    let paths = 1

    for (let i = 0; i < gridSize; i++) {
      paths *= (2 * gridSize) - i
      paths /= i + 1
    }
    return paths
  }
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem16 = new Problem(
  'Power digit sum',
  16,
  `2**15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.`,
  `What is the sum of the digits of the number 2**1000?`,
  () => {
    let num = BigInt(2).pow(1000)
    return num.toString().split('').map(e => parseInt(e)).reduce((acc, e) => acc + e)
  }
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem17 = new Problem(
  'Number letter counts',
  17,
  `If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.`,
  `If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?`,
  () => {
    let sum = 0
    let ones = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
    }
    const tens = {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
    }
    for (var i = 1; i <= 1000; i++) {
      let parts = []
      let n = i
      if (n >= 1000) {
        parts = [...parts, ones[Math.floor(n / 1000)], 'thousand']
        n %= 1000
      }
      if (n >= 100) {
        parts = [...parts, ones[Math.floor(n / 100)], 'hundred', n % 100 !== 0 ? 'and' : '']
        n %= 100
      }
      if (n >= 20) {
        parts.push(tens[Math.floor(n / 10)])
        n %= 10
      }
      if (ones[n]) {
        parts.push(ones[n])
      }
      sum += parts.join('').length
    }
    return sum
  }
)
/**
* Unsolved
* @type {Problem}
*/
const Problem18 = new Problem(
  'Maximum path sum I',
  18,
  `By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.`,
  `Find the maximum total from top to bottom of the triangle below:`,
  () => {},
  false
)
/**
* Solved 2018-10-18
* @type {Problem}
*/
const Problem19 = new Problem(
  'Counting Sundays',
  19,
  `You are given the following information, but you may prefer to do some research for yourself.`,
  `How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?`,
  () => {
    let d = new Date(1901, 0, 1)
    let sunCount = 0
    while (d.getFullYear() < 2001) {
      if (d.getDay() === 0) { sunCount++ }
      d = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate())
    }
    return sunCount
  }
)

module.exports = [
  Problem10,
  Problem11,
  Problem12,
  Problem13,
  Problem14,
  Problem15,
  Problem16,
  Problem17,
  Problem18,
  Problem19
]
