let mes = 5;
let estacion;

if (mes == 1 || mes == 2 || mes == 3)
    estacion = 'Invierno';
else if (mes == 4 || mes == 5 || mes == 6)
    estacion = 'Primavera';
else if (mes == 7 || mes == 8 || mes == 9)
    estacion = 'Verano';
else if (mes == 10 || mes == 11 || mes == 12)
    estacion = 'Invierno';
else
    estacion = 'No es un mes del año.';

console.log(estacion);

estacion = 'No es un mes del año.';

let numeros = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
let maximo = numeros.reduce((acm, num) => (num > acm ? num : acm), numeros[0]);
console.log(maximo);