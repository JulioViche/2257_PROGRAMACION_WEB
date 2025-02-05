window.onload = function () {
    mostrarMedicamentos();
}

async function mostrarMedicamentos() {
    fetchGet('Medicamentos/listarMedicamentos', 'json', (res) => {
        let divtabla = document.getElementById('divtabla');
        let tabla = document.createElement('table');
        tabla.classList.add('table', 'table-striped-rows');
        divtabla.appendChild(tabla);

        let contenido = '';
        contenido += '<thead><tr>';
        contenido += '<th>Id</th>';
        contenido += '<th>Nombre</th>';
        contenido += '<th>Descripción</th>';
        contenido += '</tr></thead>';
        contenido += '</tr></thead>';

        contenido += '<tbody>';
        for (obj of res) {
            contenido += '<tr>';
            contenido += `<td>${obj.id}</td>`;
            contenido += `<td>${obj.nombre}</td>`;
            contenido += `<td>${obj.descripcion}</td>`;
            contenido += '</tr>';
        }
        contenido += '</tbody>';

        tabla.innerHTML = contenido;
    });
}