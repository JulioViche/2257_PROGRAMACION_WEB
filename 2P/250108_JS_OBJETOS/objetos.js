/*
    OBJETOS
  - Claves y Valores
  - Dinamismo
  - Propiedades y Métodos
  - Declaración de objetos
*/

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juanpérez@mail.com',
    edad: 25
}

console.log(persona);

// MÉTODOS

const persona2 = {
    nombre: 'Darío',
    apellido: 'Vargas',
    direccion: 'Quito',
    email: 'dvargas@mail.com',

    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona2.nombreCompleto());

const persona3 = {
    nombre: 'Maria',
    edad: 25,
    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

persona3.saludar();

// Constructor de Object

const persona4 = new Object();
persona4.nombre = 'José';
persona4.apellido = 'Martínez';
persona4.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
}

persona4.saludar();

// Prototipo con Object.create

const prototipoPersona = {
    saludar: function () {
        console.log(`Hola desde prototipo, soy ${this.nombre}`)
    }
}

const persona5 = Object.create(prototipoPersona);
persona5.nombre = 'Carlos';
persona5.saludar();

//  Clases

class Persona {
    constructor(nombre, apellido, edad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }

    saludar() {
        console.log(`Hola desde clase, soy ${this.nombre}`);
    }
}

let persona6 = new Persona('Ana', 'Rios', 24, '0990372534');
persona6.saludar();

// Funciones Constructoras (Clásica)

function Persona1 (nombre, apellido, edad, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.telefono = telefono;
    this.saludar = function () {
        console.log(`Hola desde función constructor, soy ${this.nombre}`);
    }
}

let persona7 = new Persona('Luis', 'Gonzáles', 21, '0990372534');
persona7.saludar();

// Modificación, eliminación y adición de atributos

const obj = {nombre: 'Objeto1'};
obj.tipo = 'utensilio';
obj.material = 'papel';

delete obj.nombre;

console.log(obj);

// Manipular datos

for (clave in obj) {
    console.log(`${clave}: ${obj[clave]}`);
}

console.log('nombre' in obj);
console.log(obj.hasOwnProperty('material'));
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

Object.seal(obj);
let objString = JSON.stringify(obj);
console.log(objString);

let personaGet = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    edad: 50,
    get nombreCompleto () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaGet.nombreCompleto);

let personaSet = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    edad: 50,
    email: 'mvaldiviezo@espe.edu.ec',
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(idioma) {
        this.idioma = idioma;
    },
    get nombreCompleto () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSet.lang);
personaSet.lang = 'en';
console.log(personaSet.lang);

function PersonaFC(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = () => {

    };
}

let padre = new PersonaFC('Juan', 'Sánchez', 'jsanchez@mail.com');
let madre = new PersonaFC('María', 'Fernández', 'mfernandez@mail.com');
console.log(padre);
console.log(madre);