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

const inputForm = document.getElementById("input-form");

const sendButtonEl = document.getElementById("send-button");
const cancelButtonEl = document.getElementById("cancel-button");

const ticketSectionEL = document.getElementById("ticket-section");

// console.log(fullnameEl, kmEl, ageEl, sendButtonEl, cancelButtonEl);

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const calcTicketPrice = () => {
    // * creo const prezzo al km
    const priceForKm = 0.21;

    // * creo const sconto under 18
    const discountPercentageUnder18 = 20;

    // * creo const sconto over 65
    const discountPercentageOver65 = 40;

    // * calcolo prezzo totale
    let totPrice = km * priceForKm;

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
  const offerString = () => {
    if (age === "Minorenne") return "Sconto Minorenni";
    else if (age === "Over 65") return "Sconto Over 65";
    else return "Biglietto standard";
  };
  const carriageNumberGenerator = () => Math.floor(Math.random() * 10 + 1);
  const CPnumberGenerator = () =>
    Math.floor(Math.random() * (99999 - 10000) + 10000);

  // * salvo il valore di fullname in una variabile
  const fullname = fullnameEl.value.trim();
  // * salvo il valore di km in una variabile
  const km = kmEl.value;
  // * salvo il valore di age in una variabile
  const age = ageEl.value;

  //   console.log(fullname, km, age);

  const totPrice = calcTicketPrice();
  const offer = offerString();
  const carriageNumber = carriageNumberGenerator();
  const CPnumber = CPnumberGenerator();

  // * creo la card

  // * inserisco la card nell'html
  ticketSectionEL.innerHTML = `
 <h2 class="text-center">Il TUO BIGLIETTO</h2>

        <div class="card p-5 my-5">
          <h2>Dettaglio Biglietto</h2>
          <hr />
          <div class="row g-3">
            <div class="col-4">
              <h3 class="h5 mb-5">NOME PASSEGGERO</h3>
              <p>${fullname}</p>
            </div>
            <div class="col-2">
              <h3 class="h6 mb-5">Offerta</h3>
              <p>${offer}</p>
            </div>
            <div class="col-2">
              <h3 class="h6 mb-5">Carrozza</h3>
              <p>${carriageNumber}</p>
            </div>
            <div class="col-2">
              <h3 class="h6 mb-5">Codice CP</h3>
              <p>${CPnumber}</p>
            </div>
            <div class="col-2">
              <h3 class="h6 mb-5">Costo biglietto</h3>
              <p>${totPrice}</p>
            </div>
          </div>
        </div>`;
  // * svuoto gli input
  emptyFields();

  //   alert("Bottone genera cliccato");
});

cancelButtonEl.addEventListener("click", (event) => {
  // * svuoto gli input
  emptyFields();

  //   alert("Bottone cancel cliccato");
});
