// Imprimir la tabla del 5:

//** Versión de uno de los chicos: */
//! For Loop:

for (let i = 0; i <= 10; i++) {
  numero = i * 5;
  console.log(i + " X 5 = " + numero);
}

//** Versión de la profe: */
//! For Loops anidados:

for (let i = 0; i <= 10; i++) {
  for (let j = 5; j <= 5; j++) {
    console.log(`${j} x ${i} = ${j * i}`);
  }
}

//*

// Imprimir la tabla del 3:
//! Function:

function tablas(multiplo) {
  for (let i = 0; i <= 10; i++) {
    for (let j = multiplo; j <= multiplo; j++) {
      console.log(`${j} x ${i} = ${j * i}`);
    }
  }
}

tablas(3);
