// arrray.filter crée un nouveau tableau avec tous les éléments qui réussissent le test implémenté par la fonction fournie.

const nombres = [1, 2, 3, 4, 5];
const newNombres = [];
for (var i = nombres[0]; i <= nombres.length; i++) {
    if (i >= 3) {
        newNombres.push(i);
    };
};
console.log(newNombres);
// [ 3, 4, 5 ]







//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//const result = words.filter(word => word.length > 6);
//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//const array = [1, 2, 3, 4, 5, 6];
//const numbers = array.filter(num => num >= 3);
//console.log(numbers);
// expected output: Array [3, 4, 5, 6]
