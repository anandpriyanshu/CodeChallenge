// Q1  Longestword in string
// string is empty or contains whitespace the function should retrun false
// const Longestword = (str) => {

//     // if (str.trim().length === 0) {
//     //     return false
//     // }

//     // arrStr = str.split(" ")
//     // // console.log(arrStr)
//     // arrStr = arrStr.sort((a, b) => b.length - a.length)
//     // return arrStr[0]

//     // using reduce method

//     // if (str.trim().length === 0) {
//     //     return false
//     // }

//     // arrStr = str.split(" ")
//     // return arrStr.reduce((acc, currWord) => currWord.length > acc.length ? currWord : acc, "")


// }

// console.log(Longestword("watch Thapa Technical javascript course on youTube"))

///////////////////////////////////////////////////////////

// Q2 generateHas

// const generateHash = (str) => {
//     if (str.length > 280 || str.trim().length === 0) {
//         return false
//     }

//     str = str.split(" ")
//     const ans = str.map((ele) =>
//         // ele.replace(ele[0], ele[0].toUpperCase())
//         ele.charAt(0).toUpperCase() + ele.slice(1)
//     )
//     return `#${ans.join("")}`

// }

// console.log(generateHash("my name is Priyanshu anand"))


/////////////////////////////////////////////////////////

// Q3 Count charater in string


// 1st approach
// const countChar = (str, char) => {
//     str = str.toLowerCase()
//     char = char.toLowerCase()
//     totalCount = str.split("").reduce((acc, curr) => {
//         // method1
//         // if (curr == char) {
//         //     acc += 1
//         // }
//         // method2
//         curr == char ? acc += 1 : ""
//         return acc

//     }, 0)
//     // console.log(totalCount)
//     return totalCount
// }

// console.log(countChar("MissIssipii", "I"))

// 2nd approach
// const countCharacter = (str, char) => {
//     str = str.toLowerCase();
//     char = char.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count += 1;
//         }
//     }
//     return count;
// }

// console.log(countCharacter("MissIssippii", "I"));




/////////////////////////////////////////////////

// Q4 sort an array

// const sortArray = (arr) => {
//     //assending
//     return arr.sort((a, b) => a - b)
//     //descending
//     // return arr.sort((a, b) => b - a)
// }
// const arr = [30, 1, 6, 200];
// console.log(sortArray(arr))



/////////////////////////////////////////////////

// Q6 palindrome of string


// const isPalidrome = (str) => {

//     str = str.toLowerCase().replace(/\W/g, "")     //replace non-word  and this condtion for 1st example only
//     const revStr = str.split("").reverse().join("")
//     return str === revStr ? true : false
//     // console.log(revStr)
// }


// console.log(isPalidrome("A man, a plan , a canal, Panama"))
// console.log(isPalidrome("racecar"))
// console.log(isPalidrome("hellow"))


//////////////////////////////////////////////////

// Q7 findMax in array

// const findMax = (arr) => {
//     return Math.max(...arr)   //sapred operator converts from array into number
//     // return Math.max(arr) // 5

// }
// 2nd approach
// const findMax = (arr) => {
//     return arr.reduce((acc, cur) => {
//         return cur > acc ? cur : acc;
//     }, 0);
// }


// console.log(findMax([1, 5, 3, 9, 2]))
// console.log(findMax([-1, 15, -3, -9, -2]))
// console.log(findMax([5]))


//////////////////////////////////////////////////

// Q8 Factorial Number

// const Fact = (num) => {
//     let f = 1
//     for (let i = 1; i <= num; i++) {
//         f = f * i
//     }
//     return f
// }

// console.log(Fact(7))
// console.log(Fact(0))





///////////////////////////////////////////////////

// Q9 Average of number

// const avgNum = (arr) => arr.reduce((acc, curr) => acc + curr, 0) / arr.length
// console.log(avgNum([1, 5, 3, 9]))


// let num = 0
// console.log(num++)
// console.log(++num)
// console.log(num)

//////////////////////////////////////////////////

// Q10 two arrays are equal or not

// const equalArrays = (arr1, arr2) => {
//     if (arr1.length != arr2.length) {
//         return false
//     }
//     return arr1.every((currVal, index) => currVal === arr2[index])
// }
// console.log(equalArrays([1, 2, 3, 4], [1, 2, 3, 4]))




///////////////////////////////////////////////////

// Q11 Sum of digit

// const sumOfDigit = (num) => {
//     let arr = Array.from(String(num), Number)
//     return arr.reduce((acc, curr) => acc += curr, 0)
// }
// console.log(sumOfDigit(123458))

//////////////////////////////////////////////////


// Q12  removeDublicate in array

//M1
// const removeDublicate = (arr) => {

//     const removed = [...new Set(arr)]
//     return removed
// }
// console.log(removeDublicate([1, 2, 3, 4, 2, 1]))

//M2
// const arr = [1, 2, 3, 4, 2, 1]
// const removeDublicate = arr.filter((val, i, self) => {
//     return self.indexOf(val) == i
// })

//m3
// let uNum = []
// for (let i = 0; i < a.length; i++) {
//     let isDub = false
//     for (let j = 0; j < uNum.length; j++) {
//         if (a[i] === uNum[j]) {
//             isDub = true
//             break
//         }

//     }
//     if (!isDub) uNum.push(a[i])
// }
// return uNum

// console.log(removeDublicate)


//removeDublicate in string

// const removeDublicates = (str) => {

//     const ans = [...new Set(str.split(" "))]
//     return ans.join(" ")
// }
// console.log(removeDublicates("This is is a test test string string"))

/////////////////////////////////////////////////////


// Q13 countVowels

// const countVowels = (str) => {
//     // let vowels = ['a', 'e', 'i', 'o', 'u']
//     // let arr = str.split("")
//     // let c = 0
//     // for (let i of arr) {
//     //     // if (vowels.includes(i.toLowerCase())) {
//     //     //     c++
//     //     // }
//     //     vowels.includes(i.toLowerCase()) ? c++ : 0
//     // }
//     // return c

//     //m2
//     const vowel = ['a', 'e', 'i', 'o', 'u']
//     let c = 0
//     for (let i of s) {
//         if (vowel.includes(i)) {
//             c++
//         }
//     }
//     return c
// }
// console.log(countVowels("The quick brown fox jump over lazy dog"))

//  using reduce method

// const countVowels = (str) => {
//     const vowels = ["a", "e", "i", "o", "u"];
//     const arr = str.toLowerCase().split("");

//     return arr.reduce((acc, currVal) => {
//         vowels.includes(currVal) ? acc++ : acc;

//         return acc;
//     }, 0);
// };
// console.log(countVowels("The quick brown fox jump over lazy dog"))

////////////////////////////////////////////////////////////

// Q14 power of 2
// const isPowerof2 = (num) => {
//     for (let i = 1; i < num; i++) {
//         if (2 ** i == num) {
//             return true
//         }
//     }
//     return false
// }

// console.log(isPowerof2(8))
// console.log(isPowerof2(7))


/////////////////////////////////////////////////////////////////

// Q15 Sum of square of array

// const SqureSum = (arr) => {

//     // using reduce method
//     // return arr.reduce((acc, curr) =>
//     //     (acc = acc + curr * curr), 0)
//     //normal method
//     let s = 0
//     for (let i of arr) {
//         s = s + i * i
//     }
//     return s
// }
// console.log(SqureSum([1, 2, 3]))

//////////////////////////////////////////////////////////////


// Q16 onvert string into cameslcase and snakeCase

// const camelCase = (str) => {
//     str = str.trim().split(" ")

//     str = str.map((curr, i) => {
//         if (i == 0) return curr.toLowerCase()
//         else return curr.charAt(0).toUpperCase() + curr.slice(1)
//     })
//     return str.join("")
// }
// console.log(camelCase("hello world anand"))



//////////////////////////////////////////////////////////

// Q17 CheckUpperCase

// const upperCase = (chr) => {
//     // method - 1
//     // if (chr.charCodeAt(0) >= 65 && chr.charCodeAt(0) <= 90) {
//     //     return true
//     // }
//     // return false
//     // method - 2
//     return chr === chr.toUpperCase()
// }
// console.log(upperCase("a"))


/////////////////////////////////////////////////////////////

// Q18 Reverse of String
// const reverseStr = (str) => {
//     let revStr = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         revStr += str[i]
//     }
//     return revStr
// }
// console.log(reverseStr("hello"))


///////////////////////////////////////////////////////////////

// Q19  FindMedian

// const FindMedian = (arr) => {
//     let length = arr.length
//     let mid = Math.floor(length / 2)
//     if (length % 2 == 0) {
//         return (arr[mid] + arr[mid - 1]) / 2
//     }
//     return arr[mid]
// }
// console.log(FindMedian([1, 5, 12, 4, 3, 8]))



////////////////////////////////////////////////////////////

// Q20 coountNumber in array

// const CounNumber = (arr) => {
//     const count = {}

//     for (let i of arr) {
//         //m1
//         // if (i in count) {
//         //     count[i] += 1
//         // } else {
//         //     count[i] = 1
//         // }
//         //m2
//         count[i] = (count[i] || 0) + 1
//     }
//     return count
// }
// console.log(CounNumber([1, 2, 1, 2, 3, 1, 3, 4, 5, 4, 5]))

//////////////////////////////////////////////////////////

// Q21 Coun max TimeRanges

// const Mid = (arr) => {
//     const d = {}
//     let maxNum = 0
//     for (let u of arr) {
//         d[u] = (d[u] || 0) + 1
//         if (d[u] > maxNum) {
//             maxNum = u
//         }
//     }
//     return maxNum
// }

// const arr = [1, 2, 2, 3, 1, 1, 3, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5]
// console.log((Mid(arr)))
/////////////////////////////////////////////////////////////

// Q22 RepeatString

// const repeatString = (str, num) => {
//     return num > 0 ? str.repeat(num) : str
// }
// console.log(repeatString("abc", 5))

/////////////////////////////////////////////////////////////


// Q23 truncateString

// const truncateString = (str, count) => {
//     // m1
//     if (count <= 0) {
//         return str
//     }

//     else if (count < str.length) {
//         return str.slice(0, count).concat("...")
//     }
//     //M2
//     // return count <= 0 ? str : str.slice(0, count).concat("...")
// }
// console.log(truncateString("The-tickets is necessary for movies", 10))

///////////////////////////////////////////////////////////////////

// Q24 RangePrint

// const RangePrint = (a, b) => {
//     let arr = []
//     for (i = a; i <= b; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(RangePrint(2, 7))
// console.log(RangePrint(-2, 2))


///////////////////////////////////////////////////////////////////

// Q25 RangeGenerator using recursion

// const RangeGenerator = (a, b, arr = []) => {
//     if (a <= b) {
//         arr.push(a)
//         return RangeGenerator(a + 1, b, arr)
//     }
//     return arr
// }
// console.log(RangeGenerator(2, 7))

//////////////////////////////////////////////////////////////


// Q26 passwordValidator

// const passwordValidator = (pswd) => {
//     let hasUpper = false
//     let hasLower = false
//     let hasNumber = false

//     for (let char of pswd) {
//         if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//             hasUpper = true
//         }
//         else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//             hasLower = true
//         }
//         else if (!isNaN(Number(char))) {
//             hasNumber = true

//         }
//     }
//     if (!hasUpper || !hasLower || !hasNumber || pswd.length < 8) {
//         return false
//     }
//     return true
// }
// console.log(passwordValidator("uhbscdjkncj"))


////////////////////////////////////////////////////////

// Q27 randomHexColor

// const randomHexColor = () => {
//     return `#${Math.random().toString(16).slice(2, 8)}`
// }

// console.log(randomHexColor())


//////////////////////////////////////////////////////

// Q28 iSEmptyObject

// const iSEmptyObject = (obj) => {
//     // for (let key in obj) {
//     //     if (obj.hasOwnProperty(key)) {
//     //         return `it's not empty`
//     //     }
//     // }
//     // return `it's empty`
//     //M2
//     return Object.keys(obj).length === 0
// }
// console.log(iSEmptyObject({ name: "Anand" }))


//////////////////////////////////////////////////////

// Q29 Convert Object into Array and Array into Object
// const obj = {
//     nam: "Anand", age: 24, city: "Ghorawal"
// }
// let obj2Arr = Object.entries(obj)
// console.log(obj2Arr.flat())

// let Arr2Obj = Object.fromEntries(obj2Arr)
// console.log(Arr2Obj)


// Q30  Calculate age between two dates

// const CalculateBWDates = (d1, d2) => {
//     let date1 = new Date(d1)
//     let date2 = new Date(d2)
//     let diff = Math.abs(date2 - date1)
//     return diff / (24 * 60 * 60 * 1000)

// }
// console.log(CalculateBWDates("2024-01-01", "2025-01-31"))


/////////////////////////////////////////////////////////
// Q31 calculateAge
// const calculateAge = (birthDate) => {
//     let todayDate = new Date()
//     birthDate = new Date(birthDate)

//     let age = todayDate.getFullYear() - birthDate.getFullYear()

//     let monthDiff = todayDate.getMonth() - birthDate.getMonth()

//     if (monthDiff < 0 || monthDiff == 0 && todayDate.getDate() < birthDate.getDate()) {
//         age--
//     }
//     return age
// }
// console.log(calculateAge("1999-08-12"))


///////////////////////////////////////////////////////

// Q32 convertIntoStar

// const convertIntoStar = (arr) => {

//     //m1
//     // const newArr = arr.map((curr, i) => {
//     //     let star = ""
//     //     let num = 0
//     //     while (num < curr) {
//     //         star = star + "*"
//     //         num++
//     //     }
//     //     return `${i + 1}: ${star}`
//     // })
//     // return newArr.join(" \n")

//     //m2

//     return arr.map((curr, i) => {
//         return `${i + 1} : ${"*".repeat(curr)
//             }`
//     }).join("\n")
// }
// console.log(convertIntoStar([5, 2, 10, 4]))


///////////////////////////////////////////////////////////

// Q33 credit/debit Card Validate

// const cardValidate = (str) => {
//     str = str.replace(/\D/g, "")  //remove non-digit
//     revStr = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         revStr += str[i]
//     }

//     let doubleNum = revStr.split("").map((curr, i) => {
//         if (i % 2 != 0) {
//             curr = curr * 2
//             if (curr > 9) {
//                 curr = curr - 9
//             } else {
//                 curr = curr
//             }
//         }
//         return curr
//     }).reduce((acc, curr) => acc + Number(curr), 0)
//     return doubleNum % 10 == 0
// }
// console.log(cardValidate("4539 1488 0343 6467"))


// Q34 FizzBuzz

// const fizzBuzz = (n1, n2) => {
//     let arr = []
//     for (let i = n1; i <= n2; i++) {
//         console.log(i)
//         if (i % 3 == 0 && i % 5 == 0) {
//             arr.push("FizzBuzz")
//         } else if (i % 5 == 0) {
//             arr.push("Buzz")
//         } else if (i % 3 == 0) {
//             arr.push("Fizz")
//         } else {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(fizzBuzz(12, 20))

/////////////////////////////////////////////////////
// Q35 ExtractNumber from string

// const exTractNum = (str) => {
//     const regex = /\d+/g
//     return str.match(regex)
// }
// console.log(exTractNum("abc12345sdhubdnj456789"))


// Q36 validateHexColor

// const velidateHexColor = (str) => {
//     return /#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(str)
// }

// console.log(velidateHexColor("#a3c113"))
// console.log(velidateHexColor("#a3c13"))
// console.log(velidateHexColor("#b3dc113"))
// console.log(velidateHexColor("#a113"))



// Q37  findDublicate in Arr

// const findDublicate = (arr) => {

//     return arr.filter((curr, i, arr) => arr.indexOf(curr) !== i)
// }

// console.log(findDublicate([1, 2, 1, 3, 2, 4, 3, 5, 6]))

// Q38 findMax in Array

// const maxNum = (arr) => {
//     //m1
//     // return arr.reduce((acc, curr) => {
//     //     return curr > acc ? curr : acc
//     // }, 0)

//     //m2

//     return Math.max(...arr)
// }

// console.log(maxNum([1, 56, 3, 889, 10]))


// Q39 findMissNum

// const findMissNum = (arr) => {
//     let li = []

//     let maxNum = Math.max(...arr)

//     for (let i = 1; i <= maxNum; i++) {
//         if (!arr.includes(i)) {
//             li.push(i)
//         }
//     }
//     return li
// }
// console.log(findMissNum([1, 5, 6]))


/////////////////////////////////////////////////


// Q40 Extract digit from string

// const extractDigit = (str) => {
//     let extractDigit = str.match(/\d/g, "")
//     return extractDigit.join(" ")
// }
// console.log(extractDigit("sdbi223jds132jkmnd786ukmkdsmvkm"))


//////////////////////////////////////

// Q41 Extract digit from string and sum of all the digits

// const ExtractDigitSum = (str) => {
//     //m1
//     // let sum = 0
//     // for (let i = 0; i < str.length; i++) {
//     //     if (!isNaN(str[i]) && str[i] !== " ") {
//     //         sum += parseInt(str[i])
//     //     }
//     // }
//     // return sum

//     //m2
//     let extract = str.match(/\d/g)
//     let sum = extract.reduce((acc, curr) => {
//         return acc += parseInt(curr)
//     }, 0)
//     return sum
// }

// console.log(ExtractDigitSum("10s9hb12jd4s67nc3km85"))
// console.log(ExtractDigitSum("1  0s9hb1  2jd4 s67nc3km8   5"))

///////////////////////////////////////////////////////

//Q42 reverse of string

// const reverseString = (str) => {
//     const rev = str.split("").reverse()
//     return rev.join("")
// }
// console.log(reverseString("Kadak"))

// Q43 Largest Element in nested array

// const LargestInNested = (arr) => {
//     const ans = arr.flat(Infinity)
//     return Math.max(...ans)
// }

// console.log(LargestInNested([1, [4, 5], [6, [8, 9, [100]]], 2, [3, 700]]))


///////////////////////////////////////////////

// Q44 merge two arrays

// const MergeArrays = (a1, a2) => {

//     return [...a1, ...a2].sort((a, b) => { return a - b })
// }

// console.log(MergeArrays([1, 3, 5], [70, 6, 9]))

//////////////////////////////////////////////////////


// Q45 Sum in nested Array

// const sumInNested = (arr) => {
//     const ans = arr.flat(Infinity)
//     let sum = 0
//     for (let i of ans) {
//         sum += i
//     }
//     return sum
// }
// console.log(sumInNested([1, [4, 5], [60, [8, 9, [100]]], 2, [3, 70]]))


/////////////////////////////////////////////////

// Q46 Check Perfect squre

// const PerfectSqure = (num) => {
//     if (num <= 0) {
//         return false
//     }
//     let i = 0
//     while (i * i <= num) {
//         if (i * i == num) {
//             return true
//         }
//         i++
//     }
//     return false
// }
// console.log(PerfectSqure(4))


/////////////////////////////////////////////////

// Q47 convert object into string

// const Obj2String = (obj) => {

//     const Arr = Object.entries(obj)
//     const flatArr = Arr.flat(Infinity).join(" ")
//     return flatArr
// }

// const obj = {
//     nam: "Anand", age: 24, city: "Ghorawal"
// }

// console.log(Obj2String(obj))


//////////////////////////////////////////////////////

// Q48  convert Arr2Obj

// const Arr2Obj = (arr) => {
//     const obj = Object.fromEntries(arr)
//     return obj
// }
// const arr = [['nam', 'Anand'], ['age', 24], ['city', 'Ghorawal']]
// console.log(Arr2Obj(arr))

///////////////////////////////////////////////////////


// Q49 Printsum of continuning element of array


// const continueSum = (...nums) => {
//     let sum = 0
//     for (let i of nums) {
//         sum += i
//     }
//     return sum
// }

// console.log(continueSum(1, 2, 4, 5, 6))


////////////////////////////////////////////////////

// Q50 Reverse of words


// const ReverseOfWords = (str) => {

//     return revrse = str.split("").reverse().join('').split(" ").reverse().join(" ")
// }

// console.log(ReverseOfWords(" Priyanshu Anand"))

// m2 Reverse of words without using split() and reverse method

// const ReverseOfWords = (str) => {

//     let revWord = ''
//     let currWord = ''
//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] === ' ' || i === str.length) {
//             if (revWord) {
//                 revWord = currWord + ' ' + revWord
//             } else {
//                 revWord = currWord
//             }
//             currWord = ''
//         } else {
//             currWord += str[i]
//         }
//     }
//     return revWord

// }
// console.log(ReverseOfWords("My name is  Anand"))

// Q51 find Anagram in string


// const isAnagram = (s1, s2) => {

//     //     let ls1 = s1.toLowerCase().split("").sort().join('')
//     //     let ls2 = s2.toLowerCase().split("").sort().join('')
//     //     return ls1 === ls2

//     //m2

//     if(s1.length !== s2.length) return false

//     let cs1 = {}
//     let cs2 = {}
//     for (let i = 0; i < s1.length; i++) {
//         cs1[s1[i]] = (cs1[s1] || 0) + 1
//         cs2[s2[i]] = (cs2[s2] || 0) + 1
//     }
//     for (char in cs1) {
//         if (cs1[char] !== cs2[char]) return false
//     }
//     return true

// }
// console.log(isAnagram("listen", 'silent'))

////////////////////////////////////

// Q52 sum of num

// const sumOfDigit = (num) => {

//     if (num == 0) {
//         return 0
//     }
//     return num % 10 + sumOfDigit(Math.floor(num / 10))

//     // let arr = Array.from(String(num), Number)
//     // return arr.reduce((acc, curr) => acc + curr, 0)
// }
// console.log(sumOfDigit(123458))



//////////////////////////////////////////////////////////////


// Q53 In Array, loop in the original property of array


// Array.prototype.extraVal = 'Anand'

// const newArray = [2, 1, 4, 3, 6, 5]

// for (let i in newArray) {
//     if (newArray.hasOwnProperty(i)) {
//         console.log(i)
//     }
// }
// const newArray = [2, 1, 4, 3, 6, 5]

// for (let i in newArray) {
//     if (newArray.hasOwnProperty(i)) {
//         console.log(i)
//     }
// }


//////////////////////////////////////////////////////////


// Q54 Implement the Polyfil(custom method) of map method



// Array.prototype.myMap = function (cb) {

//     let emptyArray = []

//     for (let i = 0; i < this.length; i++) {
//         emptyArray.push(cb(this[i], i, this))

//     }
//     return emptyArray
// }

// // example:
// const nums = [2, 3, 1, 4]
// const multiby2 = nums.myMap((num) => {
//     return num * 2
// })

// console.log(multiby2)



////////////////////////////////////////////////////////



// Q55 Implement the Polyfil(custom method) of filter method

// Array.prototype.myFilter = function (cb) {

//     let emptyArray = []
//     for (let i = 0; i < this.length; i++) {

//         if (cb(this[i], i, this)) emptyArray.push(this[i])
//     }

//     return emptyArray
// }

// // // example:
// const nums = [2, 13, 1, 24]

// let moreThan5 = nums.myFilter((num) => {
//     return num > 3
// })

// console.log(moreThan5)


///////////////////////////////////////////////



// Q56 Implement the Polyfil(custom method) of reduce method

// Array.prototype.myReduce = function (cb, initialValue) {

//     var accumalator = initialValue

//     for (let i = 0; i < this.length; i++) {

//         accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i]

//     }
//     return accumalator

// }

// // // // example:
// const nums = [2, 13, 1, 24]

// const SumofEle = nums.myReduce((acc, curr, i, arr) => {

//     return acc + curr
// }, 0)


// console.log(SumofEle)



// Q57 Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60.

// let students = [
//     { name: 'anand', rollNumber: 23, marks: 35 },
//     { name: 'shanu', rollNumber: 43, marks: 75 },
//     { name: 'gullu', rollNumber: 33, marks: 45 },
//     { name: 'hscool', rollNumber: 23, marks: 85 },
// ]

// const totalMarks = students.map((stu) => {
//     if (stu.marks < 50) {
//         stu.marks += 20
//     }
//     return stu
// }).filter((stu) => stu.marks > 60).reduce((acc, curr) => acc + curr.marks, 0)


// console.log(totalMarks)



// Q58 how to declare the variable  without using var,let and const

// if (true) {
//     variable = 10
// }
// console.log(variable)



//Q59


// Q59 create func multiplyByTwo()  that  all numeric  property values  of nums by 2

// let nums = {
//     a: 100,
//     b: 300,
//     title: "My nums"
// }

// function multiplyByTwo(obj) {

//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }

//     }
//     return obj
// }

// console.log(multiplyByTwo(nums))



//////////////////////////////////////////////////////////

// Q60 Show only odd index element in Array


// const showOddIndexElement = (arr) => {

//     return ans = arr.filter((curr, i) => {
//         if (i % 2 !== 0) return curr
//     }
//     )
// }
// const Arr = [10, 20, 35, 46, 62, 12, 45, 33];
// console.log(showOddIndexElement(Arr))



// Q61 remove falsy values from  array

// const removeFalsy = (arr) => {

//     // return arr.filter(Boolean)
//     return arr.filter(item => item)

// }

// console.log(removeFalsy([0, 1, false, 2, '', 3, null, undefined, NaN]))



///////////////////////////////////////


// Q62 find second largest elemnet in array

// const findSencondLargest = (arr) => {

//     let l = 0, s = 0
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > l) {
//             s = l
//             l = arr[i]
//         } else {
//             if (arr[i] > s && arr[i] !== l) {
//                 s = arr[i]
//             }
//         }
//     }
//     return s === 0 ? 'Please write atleast two elements first ' : s
// }

// console.log(findSencondLargest([2, 3, 4, 1, 3, 66, 28]))

////////////////////////////////////////

// Q63 BinarySearch in array

// const binarySearch = (arr, target) => {

//     arr.sort((a, b) => a - b)

//     let s = 0
//     let e = arr.length - 1

//     while (s <= e) {
//         let mid = Math.floor((s + e) / 2)

//         if (arr[mid] > target) {
//             e = mid - 1
//         }
//         else if (arr[mid] < target) {
//             s = mid + 1
//         }
//         else {
//             return mid
//         }
//     }
//     return 'Element is not present in this array'
// }
// console.log(binarySearch([10, 22, 3, 7, 32], 22))


///////////////////////////////////////

// Q64 find first non - repeat character  in string

// const firstNonRepeatingChar = (str) => {

//     count = {}

//     for (let char of str) {
//         if (char in count) {
//             count[char] += 1
//         } else {
//             count[char] = 1
//         }
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (count[str[i]] === 1) {
//             return str[i]
//         }
//     }

//     return -1
// }
// console.log(firstNonRepeatingChar("aabccdeff"))



// Q65 remove even elment

// const RemoveEle = () => {
//     return arr.filter((curr) => curr % 2 !== 0)
// }

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(RemoveEle(arr));



// Q66 Convert the object keys into Array


// const ObjectKeys2Array = (obj) => {

//     return Object.keys(obj)
// }

// const obj = {
//     nam: "Anand", age: 24, city: "Noida"
// }

// console.log(ObjectKeys2Array(obj))


//Q67 Extract only String from array

// function onlyString(arr) {
//     return arr.filter((item) => typeof item === 'string')
// }

// const BoxValue = [8, 1, 2, 'apple', 5, 'mango', undefined, -1, null, NaN]
// console.log(onlyString(BoxValue))


// Q68 Nested array into plain Array

// const Nested2PlainArray = (arr) => {

//     return arr.reduce((acc, curr) => {

//         if (Array.isArray(curr)) {
//             acc = acc.concat(Nested2PlainArray(curr))

//         } else {
//             acc.push(curr)
//         }
//         return acc
//     }, [])

// }
// const nestedArray = [1, [2, [3, 4], 5], [6, 7]];
// console.log(Nested2PlainArray(nestedArray))


// Q69 sort array of object by property


// const sortByProperty = (arr, property) => {

//     return arr.sort((a, b) => {
//         if (a[property] < b[property]) {
//             return -1
//         }
//         if (a[property] > b[property]) {
//             return 1
//         }
//         return 0
//     })
// }

// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 }
// ];
// const sortedArraybyProperty = sortByProperty(people, 'age')
// console.log(sortedArraybyProperty)



// Q70  Count nums of zero

// const countsZeros = (n) => {
//     if (n === 0) return 0
//     let NumofZero = countsZeros(Math.floor(n / 10))
//     if (n % 10 === 0) {
//         NumofZero += 1
//     }
//     return NumofZero
// }
// console.log(countsZeros(120106050400809))


// Q71 Push zero to end in Array


// function pushZeroToEnd(arr) {

//     let k = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             [arr[i], arr[k]] = [arr[k], arr[i]]
//             k += 1
//         }
//     }
//     return arr
// }

// const arr = [2, 0, 0, 1, 3, 0, 0]
// console.log(pushZeroToEnd((arr)))

// Q72 FindUniqueNums


// function FindUniqueNums(arr) {
//     //m1
//     // return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))

//     //m2
//     let d = {}
//     for (let i of arr) {
//         if (i in d) {
//             d[i] += 1
//         } else {
//             d[i] = 1
//         }
//     }
//     const UniqueNums = Object.keys(d).filter((num) => d[num] === 1)
//     return UniqueNums.map((num) => parseInt(num))
// }
// const arr = [1, 2, 1, 4, 3, 4, 3, 5]
// console.log(FindUniqueNums(arr))


// Q73 Multiply expcept index

// function multplyExceptIndex(a) {
//     let result = [];
//     for (let i = 0; i < a.length; i++) {
//         let product = 1;
//         for (let j = 0; j < a.length; j++) {
//             if (i !== j) {
//                 product *= a[j];
//             }
//         }
//         result.push(product);
//     }
//     return result;
// }
// const a = [1, 2, 3, 4];
// console.log(multplyExceptIndex(a));


// Q74 Sum except index


// function sumExceptIndex(a) {
//     let result = []

//     for (let i = 0; i < a.length; i++) {
//         let sum = 0
//         for (let j = 0; j < a.length; j++) {
//             if (i !== j) {
//                 sum += a[j]
//             }
//         }
//         result.push(sum)
//     }
//     return result
// }
// const a = [1, 2, 3, 4];
// console.log(sumExceptIndex(a));


// Q75  multiply by 2 into nested object using recursive method(extension of Q59)

// function multiby2(obj) {
//     for (let i in obj) {
//         if (typeof obj[i] === 'number') {
//             obj[i] *= 2;
//         } else if (typeof obj[i] === 'object' && obj[i] !== null) {

//             multiby2(obj[i]);
//         }
//     }
//     return obj;
// }
// let nums = {
//     a: 100,
//     b: 300,
//     title: "My nums",
//     num: {
//         c: 200
//     }
// };

// console.log(multiby2(nums));


// Q76

// let input = [

//     { id: 1, amount: null, isAmount: false },
//     { id: 2, amount: null, isAmount: false },
//     { id: 3, amount: null, isAmount: false },
//     { id: 4, amount: null, isAmount: false },
//     { id: 5, amount: null, isAmount: false },
//     { id: 6, amount: null, isAmount: false },
//     { id: 7, amount: null, isAmount: false },
//     { id: 8, amount: null, isAmount: false },
//     { id: 9, amount: null, isAmount: false },
//     { id: 10, amount: null, isAmount: false }
// ]

// let AmountModified = input.map((num, i) => {
//     return {
//         ...num,
//         amount: i < 5 ? 100 : 50
//     }
// })
// console.log(AmountModified)

// Q77 print unique character in my name

function printUniqueCharacters(name) {
    //m1
    //     let unC = ''
    //     for (let i = 0; i < name.length; i++) {
    //         let isDublicate = false
    //         for (let j = 0; j < unC.length; j++) {

    //             if (name[i] === unC[j]) {
    //                 isDublicate = true
    //                 break
    //             }
    //         }
    //         if (!isDublicate) unC += name[i]
    //     }
    //     return unC

    //m2
    const a = name.split('')
    return a.filter((curr, i) => a.indexOf(curr) === i).join('')
}

console.log(printUniqueCharacters("Priyanshu Anand"))


// Q78 Kadane’s Algorithm


// function maxSubArray() {

//     let maxNum = arr[0]
//     let curSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         curSum += arr[i]
//         maxNum = Math.floor(curSum, maxNum)

//         if (curSum < 0) curSum = 0
//     }
//     return maxNum
// }

// const arr = [2, 3, -8, 7, -1, 2, 3];
// console.log(maxSubArray(arr))


// Q79 Armstrong  numbers

// function ArmstrongNumber(num) {

//     let arr = Array.from(String(num), Number)
//     let numDigit = arr.length
//     let sum = 0
//     for (let i of arr) {
//         sum += i ** numDigit
//     }
//     return sum === num
// }
// console.log(ArmstrongNumber(4679307774))



// Q80 two sum

// function ResultAdd(nums, target) {

//     let s = 0
//     let e = nums.length - 1
//     while (s <= e) {

//         if (nums[s] + nums[e] > target) {
//             e = e - 1
//         } else if (nums[s] + nums[e] < target) {
//             s = s + 1
//         } else {
//             return [s, e]
//         }
//     }
// }

// nums = [2, 7, 11, 15]
// console.log(ResultAdd(nums, 26))


// Q81 SwapString

// function RevString(str) {
//     str = str.split('');
//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//         [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
//     }
//     return str.join('');
// }
// let originalString = "My name Priyanshu  Anand!";
// let RevStr = RevString(originalString);
// console.log(RevStr)


// Q81 normal array to flat array

// function Normal2flatArray(arr) {
//     const result = []
//     for (let i = 0; i < arr.length; i = i + 2) {
//         const newArr = [arr[i], arr[i + 1]]
//         result.push(newArr)
//     }
//     return result
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(Normal2flatArray(arr))


// Q82 find Missing and dublicate


// function missingAndDublicate(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== i + 1) {
//             console.log('Missing Num ', i + 1)
//             console.log('Dublicate Num ', arr[i])
//         }
//     }
// }
// const arr = [1, 2, 3, 5, 5, 6]
// console.log(missingAndDublicate(arr))


// Q83 find dublicate without using javascript built-in method

// const findDublicate = (a) => {
//     let dublicates = []
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 dublicates.push(a[i])
//             }
//         }
//     }
//     return dublicates
// }
// const arr = [1, 2, 3, 2, 4, 1, 5]
// console.log(findDublicate(arr))


// Q84 Return the sum of ele which is equal to target

// function addSum(n, t) {
//     let newArr = []
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] + n[i + 1] === t) {
//             newArr.push([n[i], n[i + 1]])
//         }
//     }
//     return newArr
// }
// const nums = [1, 5, 7, -1, 5];
// const target = 6;
// console.log(addSum(nums, target))


// Q85 Find first Nonrepeating Character in string

// function firstNonRepeatChar(s) {
//     let d = {}
//     for (let i of s) {
//         if (i in d) {
//             d[i] += 1
//         } else {
//             d[i] = 1
//         }
//     }
//     for (let i of s) {
//         if (d[i] === 1) return i
//     }
//     return null
// }

// const str = 'aabccdeff'
// console.log(firstNonRepeatChar(str))


// Q86  [1,2,3,4,5,6,7,8,9,10,[11,12,13,14,15,16,17,18,19,20],null,undefine,NaN]

// convert into this [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// give sum of all the odd elements


function fromString(a) {
    const sum = a.flat(Infinity).filter((curr) => curr)
    return sum.reduce((acc, curr) => {
        if (curr % 2 !== 0) {
            acc += curr
        }
        return acc
    }, 0)
}
const nestedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], null, undefined, NaN]

console.log(fromString(nestedArray))