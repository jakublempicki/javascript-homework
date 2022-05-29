const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector(".gallery")

const markup = images
  .map((element) => `<li><img src = ${element.url} alt = ${images.alt}></li>`)
  .join("");
list.insertAdjacentHTML("beforeend", markup);

list.classList.add("picture")

const pictures = document.querySelectorAll("img")
console.log(pictures)

for (const picture of pictures) {
  picture.style.width = "100%";
  picture.style.height = "100%";
  picture.style.paddingLeft = "20px";



}

list.style.display = "flex";
list.style.listStyleType = "none";

// pictures.forEach((element) => { element.width = "500px" 


// images.forEach((element) => {
//   const li = document.createElement("li")
//   const pics = document.createElement("img")
//   list.append(li)
//   list.append(pics)
//   pics.src = element.url
//   pics.alt = element.alt


// });




    // pics.classList.add("pic-class")
    // pics.style.display = "flex";
    // pics.style.flexDirection = "row";
    // pics.style.width = "200px"
    // pics.style.margin = "none";  



