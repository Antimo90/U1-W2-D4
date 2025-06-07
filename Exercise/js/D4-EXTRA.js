// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Dichiariamo una variabile chiamata 'randomArray'. Immagina sia un "sacchetto" vuoto.
const giveMeRandom = function (length, max) {
  // Dentro ci metteremo i nostri numeri casuali.
  const randomArray = [];
  // Ora dobbiamo riempire il sacchetto con i numeri casuali.
  // Usiamo un "ciclo for".
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * max));
  }
  return randomArray;
};

const checkArray = function (arr) {
  let sumGreaterThanFive = 0;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value > 5) {
      console.log("L'elemento " + value + " è maggiore di 5.");
      sumGreaterThanFive += value;
    } else {
      console.log("L'elemento" + value + " non è maggiore di 5.");
    }
  }
  return sumGreaterThanFive;
};

// console.log(checkArray(giveMeRandom(10, 20)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  { price: 10.0, name: "Scarpe da ginnastica", id: 101, quantity: 2 },
  { price: 5.5, name: "Calzini sportivi", id: 102, quantity: 4 },
  { price: 25.0, name: "T-shirt tecnica", id: 103, quantity: 1 },
  { price: 3.2, name: "Bottiglia d'acqua", id: 104, quantity: 3 },
];
const shoppingCartTotal = function (cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const itemCost = item.price * item.quantity;
    total += itemCost;
  }
  return total;
};

// console.log("Totale del carrello:", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function (newProduct) {
  shoppingCart.push(newProduct);
  return shoppingCart.length;
};
const prodottoA = { price: 100, name: "Smartphone", id: 1, quantity: 1 };
const prodottoB = { price: 20, name: "Cover", id: 2, quantity: 2 };
const prodottoC = { price: 5, name: "Cavo USB", id: 3, quantity: 3 };

const count1 = addToShoppingCart(prodottoA);
// console.log("Dopo aver aggiunto lo Smartphone, elementi nel carrello:", count1); // Output: 1
// console.log("Stato attuale del carrello:", shoppingCart);
const count2 = addToShoppingCart(prodottoB);
// console.log("Dopo aver aggiunto la Cover, elementi nel carrello:", count2); // Output: 2
// console.log("Stato attuale del carrello:", shoppingCart);
const count3 = addToShoppingCart(prodottoC);
// console.log("Dopo aver aggiunto il Cavo USB, elementi nel carrello:", count3); // Output: 3
// console.log("Stato attuale del carrello:", shoppingCart);

/* EXTRA 4
  Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
  Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
const maxShoppingCart = function (cart) {
  if (cart.length === 0) {
    return "vuoto";
  }
  let mostExpensiveItem = cart[0];
  for (let i = 0; i < cart.length; i++) {
    const currentItem = cart[i];
    if (currentItem.price > mostExpensiveItem.price) {
      mostExpensiveItem = currentItem;
    }
  }
  return mostExpensiveItem;
};

console.log(maxShoppingCart(shoppingCart));
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function (cart) {
  if (cart.length === 0) {
    return "vuoto";
  } else {
    return cart[cart.length - 1];
  }
};

console.log(latestShoppingCart(shoppingCart));
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function (x) {
  let consecutiveSuccesses = 0;
  do {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    if (randomNumber > x) {
      consecutiveSuccesses++;
      console.log(consecutiveSuccesses);
    } else {
      consecutiveSuccesses = 0;
      console.log(consecutiveSuccesses);
    }
  } while (consecutiveSuccesses < 3);
  console.log("Ciclo terminato è Il numero casuale è stato maggiore di ", x);
};
// loopUntil(5);
loopUntil(2);
// loopUntil(8);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
