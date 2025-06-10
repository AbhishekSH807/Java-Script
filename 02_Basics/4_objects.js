// singleton

// const tinderUser = new Object()  // it is a singleton object output : {}

const tinderUser = {} // non singleton object output : {}

tinderUser.id = "123abc"
tinderUser.name = "Jayant"
tinderUser.isLoggedIn = false
// output : { id: '123abc', name: 'Jayant', isLoggedIn: false }
// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jayant",
            lastname: "R"
        }
    }

}

// if in case of no fullname you can use ? like console.log(regularUser.fullname?.userfullname.firstname);
// console.log(regularUser.fullname);  // { userfullname: { firstname: 'Jayant', lastname: 'R' } }
// console.log(regularUser.fullname.userfullname);  // { firstname: 'Jayant', lastname: 'R' }
// console.log(regularUser.fullname.userfullname.firstname);  //  Jayant
// console.log(regularUser.fullname.userfullname.lastname);   //  R

// ctrl+l give fresh terminal

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// Object.assign() : it is a static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// const obj3 = Object.assign(obj1, obj2)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// when you use {} it combine all objects in a specified object
// if you doesnot use {} then all object values are shifted to obj1

// const obj3 = Object.assign({}, obj1, obj2)  // give above output but it give guarantee

// best way to merge objects 
const obj3 = {...obj1, ...obj2}  // use this most of the time
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "abhi@gmail.com"
    },
    {
        id: 1,
        email: "ash@gmail.com"
    },
    {
        id: 1,
        email: "abhishek@gmail.com"
    }
]

// console.log(users[1].email)  //  ash@gmail.com
// console.log(users[2].email)  // abhishek@gmail.com
// console.log(users[0].email)  // because object also start from zero // abhi@gmail.com


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // it give answer in array
// { id: '123abc', name: 'Jayant', isLoggedIn: false }
// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '123abc', 'Jayant', false ]
console.log(Object.entries(tinderUser)); // it seperate each object value // [ [ 'id', '123abc' ], [ 'name', 'Jayant' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check if property exist or not //  output true
console.log(tinderUser.hasOwnProperty('isLogg'));  //  false
