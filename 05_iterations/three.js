// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "AMERICA")
map.set('FR', "FRANCE")
// map.set('IN', "INDIA") // no duplicate values are taken

// console.log(map);

for (const key of map) { // it will print all values
    // console.log(key);
    
}

for (const [key, value] of map) {  // can print only key or only value
    //console.log(key);
    console.log(key, ':-', value);
    
}


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
/* its not work
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
*/


