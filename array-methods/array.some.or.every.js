// array.some vérifie si AU MOINS UN élément du tableau satisfait le test. Elle renvoie true or false.
// array.every vérifie si TOUS les éléments du tableau satisfaits le test. Elle renvoie true or false.

//array.some
const nombres1 = [1, 2, 3, 4, 5];
const newNombres1 = [];
for (var i = nombres1[0]; i <= nombres1.length; i++) {
    if (i >= 3) {
        newNombres1.push(i);
    };
};
if (newNombres1.length > 0) {
    console.log("true");
} else {
    console.log("false");
};
// [ 3, 4, 5 ]
// true



//array.every
const nombres2 = [1, 2, 3, 4, 5];
const newNombres2 = [];
for (var i = nombres2[0]; i <= nombres2.length; i++) {
    if (i >= 3) {
        newNombres2.push(i);
    };
};
if (newNombres2.length == nombres2.length) {
    console.log("true");
} else {
    console.log("false");
};
// [ 3, 4, 5 ]
// true














//const array = [1, 2, 3, 4, 5];
//const oneHigherThanTwo = array.some(num => num > 2);
//const allHigherThanTwo = array.every(num => num > 2);

//console.log(oneHigherThanTwo);
// expected output: true
//console.log(allHigherThanTwo);
// expected output: false
