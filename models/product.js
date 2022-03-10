
const products = [
    {
        id: 1,
        name: 'A',
        price: 50,
    },
    {
        id: 2,
        name: 'B',
        price: 30,
    }
    ,
    {
        id: 3,
        name: 'C',
        price: 20,
    }
    ,
    {
        id: 4,
        name: 'd',
        price: 15,
    }
]

function getProduct(id) {
        return products.find(o => o.id === id);
}


module.exports = getProduct;