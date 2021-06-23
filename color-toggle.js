// const colors = [
//   "green",
//   "red",
//   "rgba(133,122,200)",
//   "salmon",
//   "#e52165",
//   "#f15025",
//   "#0d1137",
//   "#d72631",
//   "#a2d5c6",
//   "#077b8a",
//   "#5c3c92",
//   "#e2d810",
//   "#d9138a",
//   "#12a4d9",
//   "#322e2f",
//   "#f3ca20",
//   "#000000",
//   "#cf1578",
//   "#e8d21d",
//   "#039fbe",
//   "#b20238",
// ];
// const btn = document.querySelector(".btn");
// const color = document.querySelector(".color-container");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);
//   btn.style.backgroundColor = colors[randomNumber];
//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }

const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color-container");
console.log(color);
const button = document.querySelector(".btn");
console.log(button);

button.addEventListener("click", colorToggle);

function colorToggle() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  button.style.backgroundColor = hexColor;
  color.textContent = `Background Color: ${hexColor}`;
  document.body.style.backgroundColor = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
