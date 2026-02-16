
function addToCart(elem) {
    let event = new CustomEvent('add', {
        detail: {
            productName: "Basics Ceramic Space Heater",
            price: "499$"
        }
    });
    elem.dispatchEvent(event);
}

function changBgColor(elem) {
    elem.style.backgroundColor = "red"
}
const button = document.querySelector('.add');

button.addEventListener('add', (e) => {
    changBgColor(e.target)
    console.log(`${e.detail.productName}; Price: ${e.detail.price}`)
});

button.addEventListener('click', () => {
    addToCart(button);
});


