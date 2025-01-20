var string = 'Juan';
console.log(string);

var entero = 24;
console.log(entero);

var obj = {
    name: 'Name',
    value: 23.4,
    is: true
};
console.log(obj);
console.log(typeof obj);

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
};

console.log(typeof Person);

var u;
console.log(typeof u);

o = 1;
console.log(o++);
console.log(++o);

let a = 1, b = 2, c = 3, d = 4;
console.log(a * b - c / d);

let x = 231;
console.log('Es par: ' + (x % 2 == 0));
console.log('Es impar: ' + (x % 2 != 0));

// Determinar si una persona es mayor de edad o no.
let edad = 100;
const edadMin = 0, edadMax = 100;

if (edadMin <= edad && edad <= edadMax)
    if (edad >= 18)
        console.log('La persona es mayor de edad.');
    else
        console.log('La persona es menor de edad.');
else
    console.log('La persona no tiene una edad válida.');

// Con operadores ternarios
console.log(
    edadMin <= edad && edad <= edadMax
    ?
    (edad >= 18 ? 'La persona es mayor de edad.': 'La persona es menor de edad.')
    : 
    'La persona no tiene una edad válida.'
);

console.log(parseInt('234px'));
console.log(parseInt('3.14159'));
console.log(parseInt('abc'));

console.log(Number('234px'));
console.log(Number('3.14159'));
console.log(Number('abc'));

// => <= >= == === -> != && || <- <== ==> !== ?= := --> <--