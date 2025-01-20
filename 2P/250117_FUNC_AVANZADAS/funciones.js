function operar(callback, x, y) {
    mostrar(x, y);
    callback(x, y);
}

function sumar(x, y) {
    console.log(`suma: ${x + y}`);
}

function restar(x, y) {
    console.log(`resta: ${x - y}`);
}

function multiplicar(x, y) {
    console.log(`producto: ${x * y}`);
}

function dividir(x, y) {
    if (y === 0)
        console.log(`y = 0, no se puede dividir.`);
    else
        console.log(`cociente: ${x / y}`);
}

function mostrar(x, y) {
    console.log(`x: ${x}, y: ${y}`);
}

setTimeout(sumar, 1000, 1, 1);

let i = 1;

const interval = setInterval(sumar, 1000, 1, ++i);
