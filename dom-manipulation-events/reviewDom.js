/*
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, World!";
newDiv.style.color = "red";
const container = document.querySelector("#container");
container.appendChild(newDiv);
const removeChild = container.removeChild(newDiv);
const controls = document.querySelector(".controls");
container.insertBefore(newDiv, controls);
*/


/*
const newDiv = document.createElement("div");
newDiv.style.color = "blue";
newDiv.style.cssText = "color: blue; background: red;";
newDiv.setAttribute("style", "color: blue; background: white;");
*/

/*
const btn = document.createElement("button");
btn.textContent = "Click Me!";
btn.style.cssText = "color: white; background: black; border-radius: 5px; cursor: pointer;";
const container = document.querySelector("#container");
const controls = document.querySelector(".controls");
container.insertBefore(btn, controls);
btn.addEventListener("click", function(e) {
    console.log("Booooom!");
    e.target.style.background = "red"
});
*/

/*
const div = document.createElement("div");
div.textContent = "Hello World!";
const container = document.querySelector("#container");
container.appendChild(div);
div.setAttribute("id", "theDiv");
const idValue = div.getAttribute("id");
console.log(idValue);
*/


/*
const btn = document.createElement("button");
btn.textContent = "Click me!";
const container = document.querySelector("#container");
const controls = document.querySelector(".controls");
container.insertBefore(btn, controls);

btn.addEventListener("click", function(e) {
    btn.classList.toggle("active");
})
*/


/*
const div = document.createElement("div");
div.innerHTML = "<h1>Othman is the king</h1>";
const container = document.querySelector("#container");
const controls = document.querySelector(".controls");
container.insertBefore(div, controls);
*/

/*
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
*/ 

// Events

/*
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
*/


/*
// class
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.onclick = () => alert("BOOOOOOM!");
});
*/

/*
const msg = document.querySelector("#msg");

msg.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        event.preventDefault();
    }
});

msg.addEventListener("keyup", (event) => {
    event.target.value = event.target.value.toUpperCase()
});

msg.addEventListener("keypress", (event) => {
    console.log(`Character: ${event.key}`)
    msg.style.background = "yellow";
})
*/



/*
const input = document.getElementById("user-input");

input.addEventListener("keydown", (event) => {
    if (!isNaN(event.key) && event.key !== " ") {
        event.preventDefault()
    }
    if (event.code == "Space") {
        input.style.backgroundColor = "red"
    }
});

input.addEventListener("keyup", (e) => {
    if (e.code === "Enter") alert("Mission started!")
});

*/


/*
const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
    const target = event.target;

    switch(target.id) {
        case 'home':
            console.log("home item menu was clicked")
            break;

        case 'dashboard':
            console.log("dashboard item menu was clicked");
            break;

        case 'report':
            console.log("report item menu was clicked");
            break;
    }
});
*/


/*
const button = document.querySelector("#btn");
const container = document.querySelector("#container");
container.addEventListener("click", () => {
    container.style.backgroundColor = "red"
})
button.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "gray"
    if (e.isTrusted) {
        alert("The funds have been successfully sent!");
    } else {
        e.preventDefault;
        console.log(`you are not a human! clientX:${e.clientX}; clientY:${e.clientY}`);
    }
});

const mouseEvent = new MouseEvent("click", {
    bubbles: false,
    cancelable: true,
    clientX: 10,
    clientY: 10,
});

button.dispatchEvent(mouseEvent);
*/



/*
function themeUpdate(elem) {
    elem.style.border = "1px solid red";
    let event = new CustomEvent('theme', {
        detail: {
            theme: 'Dark'
        }
    });
    elem.dispatchEvent(event);
}

const div = document.querySelector('#container');

div.addEventListener('theme', (e) => {
    console.log(`Theme Updated: ${e.detail.theme}`);
});

themeUpdate(div);
*/


/*
function highlight(elem) {
    let bgColor = "lightblue";
    elem.style.backgroundColor = bgColor;
    let event = new CustomEvent('mark', {
        detail: {
            backgroundColor: bgColor
        }
    });
    elem.dispatchEvent(event);
}

let div = document.querySelector("#container");

function addBorder(elem) {
    elem.style.border = "1px solid black";
}

div.addEventListener('mark', function (e) {
    addBorder(this);
    console.log(e.detail);
});

highlight(div);
*/

