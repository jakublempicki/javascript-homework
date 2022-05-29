
// let counterValue = document.querySelector("#value");
// let minus1 = document.querySelector(`button[data-action="decrement"]`);
// let add1 = document.querySelector(`button[data-action="increment"]`);

// add1.addEventListener("click", () => {
//     counterValue = counterValue + 1; 
//     console.log(counterValue.textContent);
// });

let counterValue = 0;
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

const counter = document.querySelector("#value")

buttonPlus.addEventListener("click", () => {
    counterValue++;
    counter.textContent = counterValue;
});

buttonMinus.addEventListener("click", () => {
    counterValue--;
    counter.textContent = counterValue;
});