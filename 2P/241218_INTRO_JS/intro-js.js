class Estudiante {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }

    promedio() {
        let total = 0;
        for (let calificacion of this.notas)
            total += calificacion;
        return total / this.notas.length;
    }

    calificacion() {
        if (this.promedio() >= 16)
            return 'Excelente';
        if (this.promedio() >= 12)
            return 'Bueno';
        if (this.promedio() >= 8)
            return 'Aprobado';
        return 'Reprobado';
    }

    min() {
        return this.notas.reduce((acm, num) => (num < acm ? num : acm), this.notas[0]);
    }

    max() {
        return this.notas.reduce((acm, num) => (num > acm ? num : acm), this.notas[0]);
    }

    mostrar() {
        console.log('--------------------------------');
        console.log(this.nombre);
        console.log('Calificación: ' + this.calificacion());
        console.log('Promedio: ' + this.promedio());
        console.log('Calificación más alta: ' + this.max());
        console.log('Calificación más baja: ' + this.min());
    }
}

let estudiantes = [
    new Estudiante('Maria', [16, 19, 18, 20, 13]),
    new Estudiante('Luis', [20, 15, 17, 18, 12]),
    new Estudiante('Ana', [18, 20, 19, 12, 16]),
    new Estudiante('Carlos', [17, 16, 18, 16, 17]),
    new Estudiante('Sofia', [19, 18, 20, 20, 13]),
    new Estudiante('Jorge', [15, 17, 16, 20, 20]),
    new Estudiante('Lucia', [20, 19, 18, 19, 20]),
    new Estudiante('Diego', [16, 18, 17, 20, 16]),
    new Estudiante('Valeria', [19, 20, 18, 20, 12]),
    new Estudiante('Raul', [17, 16, 15, 13, 14])
];


function peor() {
    let peor = estudiantes[0];
    for (let estudiante of estudiantes)
        peor = estudiante.promedio() < peor.promedio() ? estudiante : peor;
    return peor;
}

function mejor() {
    let mejor = estudiantes[0];
    for (let estudiante of estudiantes)
        mejor = estudiante.promedio() > mejor.promedio() ? estudiante : mejor;
    return mejor;
}

for (let estudiante of estudiantes)
    estudiante.mostrar();


console.log('--------------------------------');
console.log('El estudiante con el peor promedio es ' + peor().nombre + ' con un promedio de ' + peor().promedio());
console.log('El estudiante con el mejor promedio es ' + mejor().nombre + ' con un promedio de ' + mejor().promedio());