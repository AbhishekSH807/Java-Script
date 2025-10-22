const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "apple"
}

for (const key in myObject) {
//    console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   //console.log(programming[key]);  // print js rb py java cpp
   //console.log(key); // print 0 1 2 3 4 
   
}


/*
// map is not iteratble so no output
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "AMERICA")
map.set('FR', "FRANCE")

for (const key in map) {
    // console.log(key);
    
}
*/