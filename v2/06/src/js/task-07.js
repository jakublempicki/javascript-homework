let input = document.querySelector("#font-size-control");
let span = document.querySelector("#text");


// input.addEventListener("input", (event) {
//     if (input.value < 50) {
//          span.style.fontSize = "24px";
//     } else {
//          span.style.fontSize = "48px";
//     }
// });

input.addEventListener("input", (event) => {
     const font = input.value;
     span.style.fontSize = font + "px";
});