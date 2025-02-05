// CLASES

class Conductor {
    #licencia;

    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.#licencia = licencia;
        this.rutas = [];
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
        console.log(`${this.nombre} ha registrado la ruta: ${ruta}`);
    }

    obtenerLicencia() {
        return this.#licencia;
    }
}

class Vehiculo {
    constructor(modelo, placa) {
        this.modelo = modelo;
        this.placa = placa;
        this.asignado = false;
    }

    asignar() {
        this.asignado = true;
        console.log(`Vehículo ${this.modelo} con placa ${this.placa} ha sido asignado.`);
    }

    liberar() {
        this.asignado = false;
        console.log(`Vehículo ${this.modelo} con placa ${this.placa} está disponible.`);
    }
}

class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
        super(nombre, licencia);
        this.vehiculoPreferido = null;
    }

    asignarVehiculoPreferido(vehiculo) {
        if (!vehiculo.asignado) {
            this.vehiculoPreferido = vehiculo;
            vehiculo.asignar();
            console.log(`${this.nombre} ahora tiene asignado el vehículo preferido: ${vehiculo.modelo}`);
        } else {
            console.log(`El vehículo ${vehiculo.modelo} ya está asignado a otro conductor.`);
        }
    }
}

// EKEMPLO
const conductor1 = new Conductor('Carlos', 'ABC12345');
conductor1.registrarRuta('Ruta 1');
console.log(`Licencia de ${conductor1.nombre}: ${conductor1.obtenerLicencia()}`);

const vehiculo1 = new Vehiculo('Toyota Corolla', 'XYZ-987');
const vehiculo2 = new Vehiculo('Tesla Model S', 'VIP-001');

const conductorVIP = new ConductorVIP('Ana', 'VIP67890');
conductorVIP.registrarRuta('Ruta Exclusiva 1');
conductorVIP.asignarVehiculoPreferido(vehiculo2);
conductorVIP.asignarVehiculoPreferido(vehiculo1);