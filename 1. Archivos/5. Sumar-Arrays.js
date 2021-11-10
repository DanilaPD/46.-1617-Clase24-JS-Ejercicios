// "True" vale 1, mientras que "false" vale 0:

const numeros = [5, 1, 8, 2, true];

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log("La suma de los números del array es:", total);
};

sum(numeros);

//*

const numeros1 = [5, 1, 8, 2, true, "cosa"];

const sum1 = (arr1) => {
  let total = 0;
  for (let j = 0; j < arr1.length; j++) {
    if (typeof arr1[j] === "string") {
      console.log("Uy.");
    } else {
      total += arr1[j];
    }
  }
  console.log("La suma de los números del array es:", total);
};

sum1(numeros1);
