// singleton : if object created by a constructor it is singleton
// when we declare objects in literal way it is not singleton
// Object.create : it is a constructor method which creates singleton

// object literals
// in object it allow key values  // key values consider as a string

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek Hooli", // only way to access this value i []
    // mySym: "mykey1"  // it take it as string
    [mySym]: "mykey1",
    age: 21,
    location: "Banglore",
    email: "abhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]); // key value consider as a string so you have to give it ina string way when use []
console.log(JsUser["full name"]); 
console.log(JsUser[mySym]); // it call real symbol


// when you give key as number it take as number
// const JsUser1 = {
//     0: "Abhishek",
//     1: 21
// }
// console.log(JsUser1[1]);
