// array
// () => paranthesis
// [] => square brackets
// {} => braces or curly braces

const Arr = [0, 1, 2, 3, 4, 5, true, "hitesh"] // can have different types of elements
const myArr = [0, 1, 2, 3, 4, 5] // it starts from zero
const myHeros = ["hanuman", "ram", "krishna"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

// Array methods

// myArr.push(6) // its add new value to the array
// myArr.push(7) // add new element to the array
// myArr.pop() // delete last element of the array

// myArr.unshift(9) // its add value to the first index of the array ,,,,but in case of large array its take lot of time
// myArr.shift()  // its remove unshifted element

// console.log(myArr.includes(9));  // check number exists or not and give true or false
// console.log(myArr.indexOf(9));  // give the specified index value
// console.log(myArr.indexOf(3));
 
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr); // its join and change type into string
// console.log(typeof newArr); 



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)  // it doesnt manipulate the original array
// doesnot include last range // it include index starting but not last means its prints 1 and 2 nd index element only

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // its manipulate the original array means it remove the values which are displayed
console.log("c", myArr);
console.log(myn2);

