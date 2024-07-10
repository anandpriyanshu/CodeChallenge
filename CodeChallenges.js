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
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let arr = str.split("")
//     let c = 0
//     for (let i of arr) {
//         // if (vowels.includes(i.toLowerCase())) {
//         //     c++
//         // }
//         vowels.includes(i.toLowerCase()) ? c++ : 0
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

const cardValidate = (str) => {
    str = str.replace(/\D/g, "")  //remove non-digit
    revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }

    let doubleNum = revStr.split("").map((curr, i) => {
        if (i % 2 != 0) {
            curr = curr * 2
            if (curr > 9) {
                curr = curr - 9
            } else {
                curr = curr
            }
        }
        return curr
    }).reduce((acc, curr) => acc + Number(curr), 0)
    return doubleNum % 10 == 0
}
console.log(cardValidate("4539 1488 0343 6467"))