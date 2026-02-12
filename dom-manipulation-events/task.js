/*
// solution 

const container = document.querySelector("#container");
const PARAGRAPH = document.createElement("p");
PARAGRAPH.textContent = "Hi I'm red!";
PARAGRAPH.style.color = "red";
container.appendChild(PARAGRAPH);

const h3Container = document.createElement("h3");
h3Container.textContent = "I'm a blue h3!";
h3Container.style.color = "blue";
container.appendChild(h3Container);

const div = document.createElement("div");
div.style.cssText = "border: 1px solid black; background: pink";
const divTitle = document.createElement("h1");
divTitle.textContent = "I'm in a div!";
div.appendChild(divTitle);

const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";
div.appendChild(divParagraph);

container.appendChild(div);
*/


/*
// solution 
const mainContainer = document.querySelector("#main-container");


const divContent = document.createElement("div");
divContent.classList.add("card");

const contentTitle = document.createElement("h2");
contentTitle.textContent = "Task List";
contentTitle.style.color = "blue";
divContent.appendChild(contentTitle)

const contentParagraph = document.createElement("p");
contentParagraph.textContent = "Click on the buttons below";
divContent.appendChild(contentParagraph);

for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    button.textContent = "Click Me";
    button.classList.add("btn-action");
    divContent.appendChild(button);
};
const contentButtons = divContent.querySelectorAll(".btn-action");
contentButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("IPMLEMENTED!");
    });
});

mainContainer.appendChild(divContent);

*/



/*
          ///fitst solution

const container = document.querySelector("#container");
const content = document.createElement("div");
for (let i = 0; i < 3; i++) {
    const button = document.createElement("button");
    if (i === 0) {button.textContent = "Red"};
    if (i === 1) {button.textContent = "Green"};
    if (i === 2) {button.textContent = "Blue"};
    button.classList.add("btn")
    content.appendChild(button);
};

const contentButtons = content.querySelectorAll(".btn");

contentButtons.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        document.body.style.background = e.target.textContent;
        e.target.textContent = "This color was chosen"
    })
});

container.appendChild(content);
*/


/*
          ///solution edited

const container = document.querySelector("#container");
const content = document.createElement("div");

const buttonsText = ["Green", "Red", "Blue"];

for (let i = 0; i < buttonsText.length; i++) {
    const button = document.createElement("button");
    button.textContent = buttonsText[i];
    button.classList.add("btn-action");
    content.appendChild(button);
};

const contentButtons = content.querySelectorAll(".btn-action");

contentButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const pickedColor = e.target.textContent;
        document.body.style.background = pickedColor;
        e.target.textContent = "The Color was chosen!"
    })
});

container.appendChild(content);
*/



/*
/// example

const button = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.background = rndCol;
}

button.addEventListener("click", bgChange)
*/



/*

*/