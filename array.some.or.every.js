// array.some vérifie si AU MOINS UN élément du tableau satisfait le test. Elle renvoie true or false.
// array.every vérifie si TOUS les éléments du tableau satisfaits le test. Elle renvoie true or false.

const array = [1, 2, 3, 4, 5];
const oneHigherThanTwo = array.some(num => num > 2);
const allHigherThanTwo = array.every(num => num > 2);

console.log(oneHigherThanTwo);
// expected output: true
console.log(allHigherThanTwo);
// expected output: false
