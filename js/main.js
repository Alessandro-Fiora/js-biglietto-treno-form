// * Recupero nodi dal DOM
// recupero il form intero
const inputForm = document.getElementById("input-form");

// recupero i dati inseriti nel form
const fullnameEl = document.getElementById("fullname-input");
const kmEl = document.getElementById("km-input");
const ageEl = document.getElementById("age-select");

// recupero bottone annulla del form
const cancelButtonEl = document.getElementById("cancel-button");

// rercupero il posto dove stampare il biglietto dinamicamente
const ticketSectionEL = document.getElementById("ticket-section");

/**
 * empties all the input fields
 */
const emptyFields = () => {
  fullnameEl.value = "";
  kmEl.value = "";
  ageEl.value = "";
};

// * All'INVIO del form (cioè al click sul bottone 'Genera')
inputForm.addEventListener("submit", (event) => {
  // blocco l'invio, uso il form solo per i controlli, non per inviare dati al back-end
  event.preventDefault();
  /**
   * Funzione che calcola il prezzo del biglietto
   * @returns {Number} il prezzo totale del biglietto
   */
  const calcTicketPrice = () => {
    // ! LOGICA PRESA DA ES BIGLIETTO-TRENO E RIADATTATA
    // * creo const prezzo al km
    const priceForKm = 0.21;

    // * creo const sconto under 18
    const discountPercentageUnder18 = 20;

    // * creo const sconto over 65
    const discountPercentageOver65 = 40;

    // * calcolo prezzo totale
    let totPrice = km * priceForKm;

    // * SE l'utente è MINORENNE'
    if (age === "Minorenne") {
      // * applico sconto 20%
      totPrice = totPrice - totPrice * (discountPercentageUnder18 / 100);
    }

    // * SE l'utente è OVER 65
    else if (age === "Over 65") {
      // * applico sconto 40%
      totPrice = totPrice - totPrice * (discountPercentageOver65 / 100);
    }
    return totPrice.toFixed(2);
  };
  /**
   * Ritorna la stringa corrispondente alla tariffa applicata al prezzo del biglietto
   * @returns {String} la stringa per stampare la tariffa applicata
   */
  const offerString = () => {
    if (age === "Minorenne") return "Sconto Minorenni";
    else if (age === "Over 65") return "Sconto Over 65";
    else return "Biglietto standard";
  };
  /**
   * Genera il numero della carrozza da 1 a 10
   * @returns numero casuale da 1 a 10
   */
  const carriageNumberGenerator = () => Math.floor(Math.random() * 10 + 1);
  /**
   * Genera il numero del biglietto da 10000 a 99999
   * @returns numero casuale da 10000 a 99999
   */
  const CPnumberGenerator = () =>
    Math.floor(Math.random() * (99999 - 10000) + 10000);

  // * recupero il valore di fullname e lo salvo in una variabile
  const fullname = fullnameEl.value.trim();
  // * recupero il valore di km e lo salvo in una variabile
  const km = kmEl.value;
  // * recupero il valore di age e lo salvo in una variabile
  const age = ageEl.value;

  // * calcolo prezzo totale biglietto
  const totPrice = calcTicketPrice();
  // * genero stringa offerta applicata
  const offer = offerString();
  // * genero numero carrozza
  const carriageNumber = carriageNumberGenerator();
  // * genero numero biglietto
  const CPnumber = CPnumberGenerator();

  // * creo la card con il biglietto e la inserisco nell'HTML
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
        <div class="col-2 text-center">
          <h3 class="h6 mb-5">Offerta</h3>
          <p>${offer}</p>
        </div>
        <div class="col-2 text-center">
          <h3 class="h6 mb-5">Carrozza</h3>
          <p>${carriageNumber}</p>
        </div>
        <div class="col-2 text-center">
          <h3 class="h6 mb-5">Codice CP</h3>
          <p>${CPnumber}</p>
        </div>
        <div class="col-2 text-center">
          <h3 class="h6 mb-5">Costo biglietto</h3>
          <p>${totPrice}€</p>
        </div>
      </div>
    </div>`;

  // * svuoto gli input
  emptyFields();
});

// * AL CLICK del bottone ANNULLA
cancelButtonEl.addEventListener("click", (event) => {
  // * svuoto gli input
  emptyFields();
});
