// Immediately Invoked Function Expressions (IIFE)

/*(function chai(){
    console.log(`DB CONNECTED`);
    
}) ();  // you must put semicolon here because it will give error because the parenthesies doesnt know where to stop

(function chai(){
    console.log(`DB CONNECTED`);
    
}) ()   */

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
    
}) ();
// arrow functions
( () => {
    // unamed iife
    console.log(`DB CONNECTED`);
    
}) ();


// when you have to take a variable

( (name) => {
    // parameter passing
    console.log(`DB CONNECTED ${name}`);
    
}) ('Abhi')


// must put semicolon () at last when you use 2 iife