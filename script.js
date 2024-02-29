let body = document.querySelector("body");
let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens. Changes the color of the text and background 
// - What do you think .style does? styles the webpage 
// 2. Try the following:
// - Make it so that the colors are different than what's used.
// - Try using a hex color code.
button.addEventListener("click", function() {
    body.style.backgroundColor = "#fccae9";
    header.style.color = "#ffa6dd";
    img.style.border = "5px solid #91065c";
});