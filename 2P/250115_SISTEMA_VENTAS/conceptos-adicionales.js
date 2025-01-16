class Contador {
    static totalInstancias = 0;

    constructor() {
        Contador.totalInstancias++;
    }
    
    static mostrarInstancias() {
        console.log(`Se encontraron ${this.totalInstancias} instancias.`);
    }
}

let contador1 = new Contador();
let contador2 = new Contador();
let contador3 = new Contador();

Contador.mostrarInstancias();