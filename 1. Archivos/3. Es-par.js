// Si es par, que diga par y si es impar, que diga impar. Hasta cierto número, lo pasamos en función (sino hasta el 10).

//** Versión de uno de los chicos: */
//! Function + For Loop + If - Else

function calcularImpar(limite) {
  for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0) {
      console.log("Es par.");
    } else {
      console.log("Es impar.");
    }
  }
}

calcularImpar(10);

//** Versión de la profe: */

// Opción 1:
//! Arrow + For Loop + If - Else

// Cuando es algo más bien chiquito, no hace falta poner todas las {}.
const esPar = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} es par.`);
    } else {
      console.log(`${i} es impar.`);
    }
  }
};

esPar(10);

//*

// Opción 2:
//! Arrow + For Loop + If- Else

//*** Ternario - Cortocircuito:

const esPar1 = (num) => {
  for (let i = 0; i <= num; i++) {
    i % 2 === 0 ? console.log("Es par.") : console.log("Es impar.");
  }
};

esPar1(20);
