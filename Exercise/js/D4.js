/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  // L'area di un rettangolo si calcola moltiplicando i due lati
  const calculatedArea = l1 * l2;
  return calculatedArea;
};
console.log(area(5, 9));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  // bisogna controllare se i due numeri sono uguali
  if (n1 === n2) {
    // se i numeri sono uguali calcoliamo la loro somma e poi li moltiplichiamo
    const sum = n1 + n2;
    return sum * 3;
  } else {
    // se i due numeri non sono uguali la condizione è falsa e quindi calcoliamo e restituiamo la loro somma
    return n1 + n2;
  }
};
console.log(crazySum(8, 8));
console.log(crazySum(5, 9));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n) {
  if (n > 19) {
    const difference = n - 19;
    return difference * 3;
  } else {
    return Math.abs(n - 19);
  }
};
console.log(crazyDiff(20));
console.log(crazyDiff(5));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(5));
console.log(boundary(60));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (string) {
  const epicode = "Epicode";
  if (string.startsWith("Epicode")) {
    return string;
  } else {
    const newString = "Epicode" + string;
    return newString;
  }
};

console.log(epify("Benvenuti"));
console.log(epify("Epicode è fantasico"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (numb) {
  if (numb % 2 === 0) {
    if (numb % 3 === 0) {
      return numb + " Accettato ed è un multiplo di 3";
    } else if (numb % 7 === 0) {
      return numb + " Accettato ed è un multiplo di 7";
    } else {
      return numb + " Accettato ma non è multiplo";
    }
  } else {
    return numb + " Dispari";
  }
};
console.log(check3and7(2));
console.log(check3and7(12));
console.log(check3and7(28));
console.log(check3and7(31));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (string) {
  return string.split("").reverse().join("");
};
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (stringLong) {
  const splitString = stringLong.split(" ");
  for (let i = 0; i < splitString.length; i++) {
    const wordCurrent = splitString[i];
    if (wordCurrent.length > 0) {
      const firstCapitalLetter = wordCurrent[0].toUpperCase();
      const restOfTheWord = wordCurrent.slice(1);
      splitString[i] = firstCapitalLetter + restOfTheWord;
    }
  }
  return splitString.join(" ");
};
console.log(upperFirst("ciao come state spero tutto bene"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (stringToCut) {
  if (stringToCut.length <= 2) {
    return "";
  }
  const result = stringToCut.slice(1, stringToCut.length - 1);
  return result;
};
console.log(cutString("SUPERCALIFRA"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (number) {
  const arrayNumber = [];
  for (let i = 0; i < number; i++) {
    const randomNumbers = Math.floor(Math.random() * 11);
    arrayNumber.push(randomNumbers);
  }
  return arrayNumber;
};
console.log(giveMeRandom(12));
