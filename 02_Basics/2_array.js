const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // it will merge dc_heros but make it all as 3rd index value
// console.log(marvel_heros[3][1]); // flash 

// marvel_heros.concat(dc_heros)  
// const allHeros = marvel_heros.concat(dc_heros) //concat merge 2 arrays and give a new array so store it in a new variable
// console.log(allHeros);  

const all_new_heros = [...marvel_heros, ...dc_heros]  // this is called spread method means it mix thevalues
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // depth means in one array how much sub arrays are there
const real_another_array = another_array.flat(Infinity)  // flat = its give array without the depth ,,,you can give specific depth value or can give infinity
console.log(real_another_array); // [
                                 //     1, 2, 3, 4, 5,
                                //      6, 7, 6, 7, 4,
                                //      5
                                //   ]


// console.log(another_array.flat(1)) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


console.log(Array.isArray("Abhishek")) // its check if it is array or not
console.log(Array.from("Abhishek"))  // it give a new array in which each word become a element
// from : creates an array from an iterable object
// from : [ 'A', 'b', 'h', 'i', 's', 'h', 'e', 'k']

// interesting in interview
console.log(Array.from({name: "abhi"}))  // it will give empty array because it doesnt understand which one to make array
// means it confused between key or value


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// of : returns a new aray from a set of elements