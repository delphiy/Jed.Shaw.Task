const total = require("./checkout");

//Basket data
function data() {
    return [
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
}

test("Returns correct total for basket", () => {
    expect(total(data())).toBe(190);
});


