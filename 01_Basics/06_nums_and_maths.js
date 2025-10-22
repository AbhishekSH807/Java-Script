const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(2));  // fix the decimal point answer for specified number

const otherNumber = 234.8654   // check 23.4567

// console.log(otherNumber.toPrecision(3));  // it will convert your number into specified digit
// console.log(typeof otherNumber); // o/p  235

const hundreads = 1000000
// console.log(hundreads.toLocaleString());  // give number with comas in us manner like 1,000,000
// console.log(hundreads.toLocaleString('en-IN'));  // give number with indian manner like 10,00,000


// Number.MAX_VALUE   1.7976931348623157e+308
// Number.MAX_SAFE_INTEGER   9007199254740991
// Number.MIN_VALUE    5e-324
// Number.MIN_SAFE_INTEGER   -9007199254740991



// ************************* MATHS ****************************//

// console.log(Math);
// console.log(Math.abs(-4));  // only negative change into positive ,,,,positive remain positive
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1)); // if it 0.1 also it take next value like 4.1 => 5
// console.log(Math.floor(4.9)); // if it 0.9 also it remain same like 4.9 => 4
// console.log(Math.sqrt(121));
// console.log(Math.min(4, 5, 3, 8, 1)); // min value in array
// console.log(Math.max(4, 5, 3, 8, 1)); // max value in array


// console.log(Math.random()); //  give value between or equal to 0 and 1
// console.log(Math.random()*10 + 1);  // min value will come 1 ,,,0 not come
// console.log((Math.random()*10) + 1);  // guarantee 1 or else come not 0
// console.log(Math.floor(Math.random()*10) + 1);  // also use floor and ceil

const min = 10
const max = 20

// console.log((Math.random() * (max - min + 1) + min));
console.log(Math.floor(Math.random() * ((max - min + 1)) + min));


