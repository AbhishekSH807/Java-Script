
// this keyword = current sontext
// this only works in the const not in functions
const user = {
    username: "Abhi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
// o/p for this
 /* Abhi , welcome to website
{
  username: 'Abhi',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Sam , welcome to website
{
  username: 'Sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/
        
        
    }
}
// user.welcomeMessage() // Abhi , welcome to website
// user.username = "Sam"
// user.welcomeMessage()// Abhi , welcome to website// Sam , welcome to website

// console.log(this); // {} o/p



/*function chai(){
    console.log(this);
    
}
chai()*/
/*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
} */

/*  
  function chai(){
    let username = "Abhi"
    console.log(this.username);
    
}
chai() // undefined // becasue it (this) cannot work in "let"
*/


// =================// arrow functions //=================//
// =>
const chai =  () => {
     let username = "Abhi"
    console.log(this.username); // indefined
    console.log(this); // {}
}
// chai()

// ===========Pure Arrow functions===============//

// () => {}  syntax
// basic
const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3, 4));

// ============Implicit return ============// dont use curly brases
// if use {} the you have to use return
// const addThree = (num1, num2) => num1 + num2  // or
const addThree = (num1, num2) => (num1 + num2)
console.log(addThree(4,4)); // 8

// const addThree = (num1, num2) => {username: "Abhi"} // it will give you error you must put
const addfour = (num1, num2) => ({username: "Abhi"})
console.log(addfour(3,4)); // { username: 'Abhi' }

/*const myArray = [2, 5, 3, 7, 8]

myArray.forEach(() => ())
*/
