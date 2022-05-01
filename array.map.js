// array.map permet de crée un nouveau tableau rempli avec les résultats demandé dans la fonction.

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// output= [2, 8, 18, 32]

const array = [1, 2, 3, 4, 5];
const newArray = array.map(num => num * num);
console.log(newArray);
// output= [1, 4, 9, 16, 25]
