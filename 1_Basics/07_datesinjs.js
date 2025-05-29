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

let myCreatedDate = new Date(2023, 0, 23, 5, 3)  
console.log(myCreatedDate.toLocaleString());  // 1/23/2023, 5:03:00 AM
