const total = require("../checkout");
const getProduct = require("../models/product");

test("Check if we get correct total for basket", () => {
    const data = [
        {
            id: 1,
            productID: 1,
            quantity: 3,
        },
        {
            id: 2,
            productID: 2,
            quantity: 2,
        }
    ]


    expect(total(data)).toBe(190);
});

test("Check if we get correct total without offer", () => {
    const data = [
        {
            id: 1,
            productID: 1,
            quantity: 2,
        }
    ]

    const product = getProduct(1);
    const correctTotal = product.price * 2;

    expect(total(data)).toBe(correctTotal);
});
