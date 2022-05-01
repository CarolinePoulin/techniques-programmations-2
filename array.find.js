// array.find renvoie SEULEMENT LE PREMIER élément du tableau qui satisfait la fonction de test fournie.
// Si aucune valeur ne satisfait la fonction, elle renvoie undefined.

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12

const array = [1, 2, 3];
const number = array.find(num => num >= 2);
console.log(number);
// expected output: 2
