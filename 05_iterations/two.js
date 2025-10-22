// while

/* syntax

while (condition) {
}

*/

/*
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}
*/

let myArray = ["hanuman", "ram", "krishna"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
    
}

// do while

/* syntax

do {
    
} while (condition);
 
*/

let score = 1 // print 1 to 10
// let score = 11  // just print " score is 11"
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);