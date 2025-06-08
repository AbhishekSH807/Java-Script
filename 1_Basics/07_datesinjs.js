// Dates

let myDate = new Date()
// console.log(myDate.toString());  // Thu May 29 2025 13:06:48 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // Thu May 29 2025
// console.log(myDate.toJSON());  // 2025-05-29T13:06:48.179Z
// console.log(myDate.toLocaleString());  // 5/29/2025, 1:06:48 PM
// console.log(myDate.toLocaleDateString());  // 5/29/2025
// console.log(myDate.toLocaleTimeString());  // 1:06:48 PM
// console.log(myDate.toISOString());  // 2025-05-29T13:06:48.179Z

// console.log(typeof myDate)  // date also is an object

// let myCreatedDate = new Date(2023, 0, 23)  
// console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  
// console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 5:03:00 AM

let myCreatedDate = new Date("01-14-2023")  
// console.log(myCreatedDate.toLocaleString());  // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()  // to create poles in mili second
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());   // convert in mili seconds   // compare always in mili seconds
// console.log(Math.floor(Date.now()/1000));  //to get in second and to avoid decimal points

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // start from zero
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1); // to avoid confusion for end user

// `${newDate.getDay()} and the time`
// ctrl + space give options 
newDate.toLocaleString('default', {
    weekday: "long",
    
})