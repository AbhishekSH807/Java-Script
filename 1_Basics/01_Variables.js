const accountId = 144553
let accountEmail = "abhi23@gmail.com"
var accountPassword="12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hgd@gmail.com"
accountPassword = "234321"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
