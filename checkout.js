const getOffer = require("./models/offer");
const getProduct = require("./models/product");

function total(basket) {
    let total = 0;

    for (let j = 0; j < basket.length; j++){
        const productID = basket[j].productID;
        const basketQuantity = basket[j].quantity;
        const offer = getOffer(productID);
        const product = getProduct(productID);
        let subTotal;

        //product has offer
        if(offer && basketQuantity >= offer.quantity) {
            if(offer.quantity % basketQuantity === 0) {
                subTotal = basketQuantity / offer.quantity * offer.price
            } else {
                subTotal = (
                    parseInt( basketQuantity / offer.quantity) * offer.price
                ) + product.price
            }
        } else { //no offer
            subTotal = product.price * basketQuantity;
        }

        total += subTotal;
    }

    return total;
}


module.exports = total;