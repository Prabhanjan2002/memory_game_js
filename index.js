const cardArray = [
  {
    name: "berger",
    img: "berger.jpeg",
  },
  {
    name: "fries",
    img: "fries.jpeg",
  },
  {
    name: "hotdog",
    img: "hotdog.jpeg",
  },
  {
    name: "ice-cream",
    img: "ice-cream.jpeg",
  },
  {
    name: "milkshake",
    img: "milkshake.jpeg",
  },
  {
    name: "pizza",
    img: "pizza.jpeg",
  },
  {
    name: "berger",
    img: "berger.jpeg",
  },
  {
    name: "fries",
    img: "fries.jpeg",
  },
  {
    name: "hotdog",
    img: "hotdog.jpeg",
  },
  {
    name: "ice-cream",
    img: "ice-cream.jpeg",
  },
  {
    name: "milkshake",
    img: "milkshake.jpeg",
  },
  {
    name: "pizza",
    img: "pizza.jpeg",
  },
];
//console.log(cardArray);
cardArray.sort(() => 0.5 - Math.random());
const displaygrid = document.querySelector("#grid");

function createboard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "blank.jpeg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    displaygrid.appendChild(card);
  }
}
createboard();

function flipcard() {
  const cardID = this.getAttribute("data-id");
  console.log(cardArray[cardID].name);
  console.log("clicked", cardID);
}
