//*
// Opción 1:

const str1 = "nucba";
const str2 = "NucBa";

if (str1.toLowerCase() === str2.toLowerCase()) {
  console.log(
    `Son iguales porque son ${str1.toLowerCase()} y ${str2.toLowerCase()}.`
  );
} else {
  console.log(`No son iguales.`);
}

//*
// Opción 2:

const string1 = "nucba";
const string2 = "NucBa";

const comparando = (strA, strB) => {
  if (strA === strB) {
    console.log(`Son iguales porque son ${strA} y ${strB}.`);
  } else {
    console.log(`No son iguales porque son ${strA} y ${strB}.`);
  }
};

comparando(string1.toLowerCase(), string2.toLowerCase());
