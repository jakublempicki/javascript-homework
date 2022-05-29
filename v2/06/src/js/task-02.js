const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach((item) => {
      const newElement = document.createElement("li")
  newElement.textContent = item
  newElement.classList.add("item")
  console.log(newElement);
const lista = document.querySelector("#ingredients")
lista.append(newElement)
});


