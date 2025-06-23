function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

// sayMyName() it is execution
// sayMyName it is reference

// sayMyName()
// when take inputs for a function that are called parameters
// function addTwoNumbers(number1, number2){  // in this number are called parameters
//     console.log(number1 + number2);
//     
// }
// when you call function and pass values that values are called arguments
// addTwoNumbers(3, 4)  // 3 and 4 are called arguments
// addTwoNumbers(3, "4")  // 34

// const result = addTwoNumbers(3,4)
// console.log("Result :", result); // it will give undefined

function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result // after result nothing will be print
    // console.log("Abhi");
    
    // another method call direct return
    return number1 + number2
}
const result = addTwoNumbers(3,4)
// console.log("Result :", result);

// function loginUserMessage(username){
function loginUserMessage(username = "sam"){
    // if(username === undefined){ // in js undefined means false
    if(!username){
        console.log("Please enter a user name");
        return // use to not print the undefined just logged in
    }
    return `${username} just logged in`

}

// console.log(loginUserMessage("Abhishek")) // Abhishek just logged in
console.log(loginUserMessage())  // when u doesn't pass values // undefined just logged in


