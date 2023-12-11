/* 
    ARRAYS AND CALLBACKS
    - 
*/

/* while() {
    // do something
}
for (let review of reviews)

for (i=0; condtional; i++) */

const nums = [ 1,2,3,4,5,6,7,8,9,0]
// (num) => {}
const newNums = []

nums.forEach(( num, index, arr )=> {
    // do something
    // console.log(index)
    // console.log(arr[index], arr)
// arr[index] = num + 5
// newNums.push(num +5)

})

// console.log(nums)

// Map - returns an array
const numsMultipliedByTen = nums.map((num) =>  {
    // console.log(num)
    return num * 10
}
  );
  
//   console.log(numsMultipliedByTen, "map");

//   ForEach - no return
// map -> returns an array

const add5 = (nums) => nums + 5

const numsMap = nums.map(add5)
const numsMap2 = nums.map((nums) => nums + 5)

// console.log(numsMap)

//const nums = [ 1,2,3,4,5,6,7,8,9,0]

const isEven = (num) => num % 2 === 0

// EVERY (true/false) - will return a boolean of true IF ALL ELEMENTS in the array pass the test condtional/ function given. Will return a false if at least one fails
const numsEvery = nums.every(isEven)
const numsEvery2 = nums.every (num => num % 2 === 0)
// console.log(numsEvery)

// SOME (true/false) - will return true if AT LEAST ONE  value in the array meets test conditional. Will return false if NO elements in the array pass the test conditional
const numsSome = nums.some(num => num > 100)
const numsSome2 = nums.some(num => num %2 === 0)
// console.log(numsSome)

// FILTER - returns a new array of values that pass the test function/ conditional given, or that make your test conditional truthy
const numsFilter = nums.filter(num => num % 2 === 0)
const numsFilter2 = nums.filter(isEven)
// console.log(numsFilter2)

// FIND - returns the first element in the array being iterated over that satisfies the test conditional in the callback function. If no element passes the conditional, undefined is returned
const numsFind = nums.find(isEven)
const numsFind2 = nums.find(num => num % 2 === 0)

const arrObj = [
    {name : "Destiny"},
    {name: "Xavier"},
    {name: "Carlos", Last: "Godoy"},
    {name: "Carlos", Last: "Go"},
]
const findName = arrObj.find(obj => obj.name === "Carlos")
// console.log(findName)
// console.log(numsFind2)

// FIND INDEX - returns the index position of the first element in the array that satisfies the test conditional, if no elements satisy the conditional, -1 is returned
 const numsFindIndex = nums.findIndex(num => num %2 === 0)
 const numsFindIndex2 = nums.findIndex(num => num >100)
// console.log(numsFindIndex2)

// console.log(nums.indexOf(3), "indexOf")

// Index Of
// 97 - 122 
// console.log('z'.charCodeAt(0))
const letters = []
for (let i = 97 ; i < 123 ; i++){
    const char = String.fromCharCode(i)
    letters.push(char)
}

letters.push('a')
// console.log(letters)

const findIndex = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
    //   console.log(arr[i])
      if(arr[i] === item){
        return i
      }
    }
    return -1

  };
  
//   console.log(findIndex(letters, "a"));
//   console.log(findIndex(letters, 2))

// LOOP THE LOOP
//  Understand - find greatest sum of rows/ columns 2d array
const arr = [ 
[10, 20, 30], 
[40, 50, 60], 
[70, -80, 90] ];
// const year = [ [month[day] ] ]

const arr2 = [ [10, 20, 30], [40, 50, 60], [70, -80, 90] ];
// arr[x][y]
//  10, 40, 70 -> arr2[0][0], arr2[1][0] , arr2[2][0]
// 20, 50 -80 arr2[0][1], arr2[1][1], arr2[2][1]
// 30, 60, 90 arr2[0][2], ar2[1][2], arr2[2][2]

const greatestSum = (arr) => {

    const sums = []
  
   for (let x = 0; x < arr.length; x++){
    // console.log(arr[x])
    // console.log(arr[x][0])
   
    let rowSum = 0
    let columnSum = 0


    for(y = 0; y < arr.length; y++){
        // console.log(arr[x][y], x, y)
        // console.log(arr[y][x], y, x)
        rowSum += arr[x][y]
        columnSum += arr[y][x]
    }
    // sums.push(rowSum, columnSum)
    sums.push(rowSum)
    sums.push(columnSum)
   }
//    console.log(sums)
//    Math.max( 60, 120, 150, -10, 80, 180 )
   return Math.max(...sums)

  };
  
//   console.log(greatestSum(arr));

//   PASSED BY REFERENCE
const array = ['a', 'b', 'c']
const reversedArray = array.reverse()
// reversedArray[0] = 'd'
// array.push('e', 'f')
//  [a,b,c,]
const reversedArray2 = [...array.reverse()]
reversedArray2[0] = 'd'

array.push('e', 'f')

console.log(array, reversedArray2)