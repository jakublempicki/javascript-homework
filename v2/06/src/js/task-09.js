function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorButton = document.querySelector(".change-color")
let body = document.body

colorButton.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
});

