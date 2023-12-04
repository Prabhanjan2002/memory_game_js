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
const resultdisplay = document.querySelector("#result");
let cardschoosen = [];
let cardschoosenids = [];
const cardswon = [];

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
function checkmatch() {
  // console.log("checking for match");
  const cards = document.querySelectorAll("img");
  const optiononeid = cardschoosenids[0];
  const optiontwoid = cardschoosenids[1];
  if (optiononeid == optiontwoid) {
    alert("you clicked same image");
  }
  if (cardschoosen[0] == cardschoosen[1]) {
    // alert("you found a match");
    cards[optiononeid].setAttribute("src", "white.jpg");
    cards[optiontwoid].setAttribute("src", "white.jpg");
    cards[optiononeid].removeEventListener("click", flipcard);
    cards[optiontwoid].removeEventListener("click", flipcard);
    cardswon.push(cardschoosen);
  } else {
    cards[optiononeid].setAttribute("src", "blank.jpeg");
    cards[optiontwoid].setAttribute("src", "blank.jpeg");
    alert("sorry try again!");
  }
  resultdisplay.textContent = cardswon.length;
  cardschoosen = [];
  cardschoosenids = [];

  if (cardswon.length == cardArray.length / 2) {
    resultdisplay.textContent = "Congratulations";
  }
}

function flipcard() {
  const cardID = this.getAttribute("data-id");
  // console.log(cardArray[cardID].name);
  // console.log("clicked", cardID);
  cardschoosen.push(cardArray[cardID].name);
  cardschoosenids.push(cardID);
  // console.log(cardschoosen);
  // console.log(cardschoosenids);
  this.setAttribute("src", cardArray[cardID].img);
  if (cardschoosen.length === 2) {
    setTimeout(checkmatch, 500);
  }
}
