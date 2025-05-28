const name = "Abhishek"
const repoCount = 50

// console.log(name + repoCount);
// console.log(name + repoCount + " Value"); // outdated

console.log(`Hello my nme is ${name} and my repo count is ${repoCount}`);  // new method


const gameName = new String('Abhishek-SH   hi hello')  // key start with 0 means a is in 0 position


// console.log(gameName[0]);
// console.log(gameName.__proto__); // 2 underscore

// string functions

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));  // to check which word is in specific position
console.log(gameName.indexOf('h'));  // to check specific word position in the string

const newString = gameName.substring(0, 4)  // getting substring of a string
console.log(newString);


const anotherString = gameName.slice(0, -8)  // can give negative values it count from reverse
console.log(anotherString);


const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove staring and end spaces
console.log(newStringOne.trimStart());  // remove starting space
console.log(newStringOne.trimEnd());   // remove end space


const url = "https://hitesh.com/hitesh%20choudhary"  // when you give space in url it convert its into %number 
// example "https://hi.com/abhi sh"   browser convert it into "https://hi.com/abhi%20sh"

console.log(url.replace('%20', '-'));  // replace specific word or letter

console.log(url.includes('hitesh'));  // check key word is present or not in the url


console.log(gameName.split('-'));
const words = gameName.split(" ");
console.log(words[3]);  // split by word

const chars = gameName.split("");
console.log(chars[2]);  // split by character

const strCopy = gameName.split();
console.log(strCopy);  // give exact duplicate 


// blink, bold, charAt, concat, constructor, endsWith, fixed

