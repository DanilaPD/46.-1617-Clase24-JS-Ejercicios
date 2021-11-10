// Sumar los múltiplos de 5 menores a 100:

//** Versión de la profe nada más: */
//! Function + For Loop + If

function sum(max) {
  let suma = 0;
  for (let i = 0; i < max; i++) {
    if (i % 5 === 0) {
      console.log(i);
      suma += i;
      console.log(`Número actual: ${suma}.`);
    }
  }
  console.log(`El total es: ${suma}.`);
}

sum(100);
