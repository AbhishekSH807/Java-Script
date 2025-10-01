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
        console.log(username);
        
    }
    // console.log(website);
    two()

}
one() 