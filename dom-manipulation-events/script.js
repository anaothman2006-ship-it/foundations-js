const container = document.getElementById("container");

container.addEventListener('click', () => {
    console.log('BOOOOOOOM!');
}, true);

const button = document.querySelector("button");
button.addEventListener('click', (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = "red"
});

