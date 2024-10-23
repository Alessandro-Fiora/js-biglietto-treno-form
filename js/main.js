const fullnameEl = document.getElementById("fullname-input");
const kmEl = document.getElementById("km-input");
const ageEl = document.getElementById("age-select");

const sendButtonEl = document.getElementById("send-button");
const cancelButtonEl = document.getElementById("cancel-button");

// console.log(fullnameEl, kmEl, ageEl, sendButtonEl, cancelButtonEl);

sendButtonEl.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Bottone genera cliccato");
});

cancelButtonEl.addEventListener("click", (event) => {
  event.preventDefault();

  alert("Bottone cancel cliccato");
});
