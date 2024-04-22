// map method example1:
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salesPrices = prices.map(price => price / 2);
console.log(salesPrices);

// map method example2:
const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];
const salesProducts = products.map(product => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 }
    } else {
        return product;
    }
});
console.log(salesProducts);