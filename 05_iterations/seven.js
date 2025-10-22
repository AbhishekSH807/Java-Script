const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)
// const newNums = myNums.map( (num) => { return num + 10} )

// chaining : means calling two or more methods in a single line
const newNums = myNums
        .map( (num) => num * 10 )  // its value pass to the next level
        .map( (num) => num + 1 )  // num value is got from above statement
        .filter( (num) => num >= 40 )
console.log(newNums);
