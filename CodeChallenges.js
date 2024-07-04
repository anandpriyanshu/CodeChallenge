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

// Q12 removeDubliate
//removeDublicate in array
// const removeDublicate = (arr) => {

//     const removed = [...new Set(arr)]
//     return removed
// }
// console.log(removeDublicate([1, 2, 3, 4, 2, 1]))


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

const FindMedian = (arr) => {
    let length = arr.length
    let mid = Math.floor(length / 2)
    if (length % 2 == 0) {
        return (arr[mid] + arr[mid - 1]) / 2
    }
    return arr[mid]
}
console.log(FindMedian([1, 5, 12, 4, 3, 8]))



////////////////////////////////////////////////////////////

// Q20 

const CounNumber = (arr) => {
    const count = {}
    for (let i of arr) {
        if (i in count) {
            count[i] += 1
        } else {
            count[i] = 1
        }
    }
    return count


}
console.log(CounNumber([1, 2, 1, 2, 3, 1, 3, 4, 5, 4, 5]))