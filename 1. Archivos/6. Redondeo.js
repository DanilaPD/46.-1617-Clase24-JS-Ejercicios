// Hacer una función que redondee (toFixed):

//** Versión de uno de los chicos: */

const redondear = (numero) => numero.toFixed(2);

console.log(redondear(10.974));

//** Versión de la profe: */

// To Fixed:
const redondeo = (a) => a.toFixed(0);

console.log(redondeo(15.48742454));

// Ceil:

// Si queremos controlar bien para qué lado va, nos conviene usar "ceil" o "floor".

const paraArriba = (b) => Math.ceil(b);

console.log(paraArriba(16.5878));
