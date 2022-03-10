//In read application , we get result from api which usually get data from db
const offers = [
    {
        productID: 1,
        quantity: 3,
        price: 130
    }
]

function getOffer(productID) {
    return offers.find(o => o.productID === productID);
}

module.exports = getOffer;