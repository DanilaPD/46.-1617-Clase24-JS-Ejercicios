// Cada múltiplo de 3 se reemplaza por "fizz". Cada múltiplo de 5, por "buzz". Si es múltiplo de los dos, por "fizzbuzz".

//** Versión de uno de los chicos: */
//! Function + For Loop + If - else

let tres = "Fizz";
let cinco = "Buzz";
let ambas = "Fizzbuzz";

function fizzBuzz(numero) {
  for (let i = 0; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(ambas);
    } else if (i % 3 === 0) {
      console.log(tres);
    } else if (i % 5 === 0) {
      console.log(cinco);
    } else console.log(i);
  }
}

console.log(fizzBuzz(15));

//** Versión de la profe: */
//! Arrow + For Loop + If - else

const fb = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fb(20);
