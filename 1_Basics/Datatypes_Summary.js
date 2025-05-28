// Primitive : call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score:Number = 100
// const score = 100 // number
// const scoreValue = 100.3 // number

// const isLoggedIn = false // Boolean
// const outsideTemp = null // null
// let userEmail; // undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId); // not equal

// const bigNumber = 3456788887654334567n // use n in last



// Non-primitive (Reference type): call bye Reference(memory reference is allowed)

// Array, Objects, Functions

const heros = ["Hanuman", "Ram", "Krishna"]; // array
let myObj = {
    name: "abhishek", // object declare between curly brases
    age: 22,
}

const myFunction = function(){ // function
    console.log("Hello, world");
    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

// typeof val                           result
// undefined                        undefined
// null                             object
// boolean                          boolean
// number                           number
// string                           string
// function                         function
// all non primitive                object function