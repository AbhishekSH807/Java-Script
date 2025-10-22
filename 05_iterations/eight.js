const myNums = [1, 2, 3]

/*
const myTotal = myNums.reduce( (acc, curval) => {
    console.log(`acc: ${acc} and curval: ${curval}`);
    
    return acc + curval
}, 0) // here you have to give accumalator value
console.log(myTotal);

*/

const myTotal = myNums.reduce( (acc, curval) => acc + curval ,0)

// console.log(myTotal);

const shoppingCart =[
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
