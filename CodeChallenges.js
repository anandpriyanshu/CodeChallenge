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

const findMax = (arr) => {
    return Math.max(...arr)   //sapred operator converts from array into number
    // return Math.max(arr) // 5

}

console.log(findMax([1, 5, 3, 9, 2]))
console.log(findMax([-1, 15, -3, -9, -2]))
console.log(findMax([5]))

