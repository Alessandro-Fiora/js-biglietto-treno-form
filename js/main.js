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

sendButtonEl.addEventListener("click", (event) => {
  event.preventDefault();
  // * salvo il valore di fullname in una variabile
  const fullname = fullnameEl.value;
  // * salvo il valore di km in una variabile
  const km = kmEl.value;
  // * salvo il valore di age in una variabile
  const age = ageEl.value;

  console.log(fullname, km, age);

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
