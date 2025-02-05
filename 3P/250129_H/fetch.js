/*
FETCH API

*/

// Uso de fetch

// GET

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // Convierte a JSON
    .then(data => console.log(data)) // Muestra datos en consola
    .catch(error => console.error('Error: ', error)) // Manejo de erroresnal consumir la API

// POST

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {'content-type' : 'aplication/json'},
    body: JSON.stringify({
        title: 'Nuevo post',
        body: 'Contenido del post',
        userId: 1
    })  
})
    .then(response => response.json()) // Convierte a JSON
    .then(data => console.log('Respuesta: ', data)) // Muestra datos en consola
    .catch(error => console.error('Error: ', error)) // Manejo de erroresnal consumir la API

async function ObtenerDatos() {
    try {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
    } catch (error) {
        console.error('Error: ', error);
    }
}

let datos = ObtenerDatos();
console.log(datos);

/*
API FETCH se usa para:
- Peticiones a travez de HTTP
- Para el consumo de info a travez de datos creados de forma no estructurada
*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // Convierte a JSON
    .then(users => {
        const lista = document.getElementById('usuarios');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error('Error: ', error))