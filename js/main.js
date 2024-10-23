/**
 * empties all the input fields
 */
const emptyFields = () => {
  fullnameEl.value = "";
  kmEl.value = "";
  ageEl.value = "";
};

const fullnameEl = document.getElementById("fullname-input");
const kmEl = document.getElementById("km-input");
const ageEl = document.getElementById("age-select");

const sendButtonEl = document.getElementById("send-button");
const cancelButtonEl = document.getElementById("cancel-button");

// console.log(fullnameEl, kmEl, ageEl, sendButtonEl, cancelButtonEl);

let fullname;
let km;
let age;
let output;
let totPrice;
sendButtonEl.addEventListener("click", (event) => {
  event.preventDefault();
  // * salvo il valore di fullname in una variabile
  fullname = fullnameEl.value;
  // * salvo il valore di km in una variabile
  km = kmEl.value;
  // * salvo il valore di age in una variabile
  age = ageEl.value;

  console.log(fullname, km, age);

  console.log(calcTicketPrice());

  // * creo la card

  // * inserisco la card nell'html

  // * svuoto gli input
  emptyFields();

  alert("Bottone genera cliccato");
});

cancelButtonEl.addEventListener("click", (event) => {
  event.preventDefault();

  // * svuoto gli input
  emptyFields();

  alert("Bottone cancel cliccato");
});

const calcTicketPrice = () => {
  // * creo const prezzo al km
  const priceForKm = 0.21;

  // * creo const sconto under 18
  const discountPercentageUnder18 = 20;

  // * creo const sconto over 65
  const discountPercentageOver65 = 40;

  // * calcolo prezzo totale
  totPrice = km * priceForKm;

  // * SE l'età dell'utente è MINORE di 18 anni
  if (age == "Minorenne") {
    // * applico sconto 20%
    totPrice = totPrice - totPrice * (discountPercentageUnder18 / 100);
  }

  // * SE l'età dell'utente è MAGGIORE O UGUALE di 65 anni
  else if (age == "Maggiorenne") {
    // * applico sconto 40%
    totPrice = totPrice - totPrice * (discountPercentageOver65 / 100);
    // * aggiorno output con prezzo in forma umana (max 2 decimali)
  }
  return totPrice.toFixed(2);
};
