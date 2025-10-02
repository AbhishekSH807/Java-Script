// var c = 300
let a = 300
// Scope {  }
if (true){
    let a =10
    const b = 20
    // console.log("INNER: ", a);
    
    // var c = 30
}
// the code wrtie outside the scope is called global scope
// the code write inside the scope is called block scope
// console.log(a); // for if error
// console.log(b); // error
// console.log(c); //30 in if

// onsole.log(a);// 300 for global // INNER:  10 for block scope


//  nested scope
function one(){
    const username = "Abhi"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()

}
one() 

if (true){
    const username = "Abhi"
    if (username === "Abhi"){
        const website = " Youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++++++ Interesting +++++++++++++++++++++//

console.log(addone(5)); // 6 it also give correct o/p

function addone(num) {
    return num + 1
    
}
// console.log(addone(5)) // 6 correct o/p

// when you store a function in a varibale it cannot be called before the code
// console.log(addTwo(5)); // error cannot get function
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5)) // 7 