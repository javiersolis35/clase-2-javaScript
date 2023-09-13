// generar Tabla con JavaScript
// En los titulos de las columnas
// Colocar
// Nombre de Pais
// Capital de pais
// Cantidad de Habitantes
// Idioma
// Contenido
// Cargar 5 paises distintos

const tableContent = document.querySelector('#tableContent');
const table = document.createElement('table');
const thead = document.createElement('thead');
const thNombre = document.createElement('th');
const thCapital = document.createElement('th');
const thHabitantes = document.createElement('th');
const thIdioma = document.createElement('th');
const tbody = document.createElement('tbody');
const datos = [{ nombre: "Argentina", capital: "Buenos Aires", habitantes: "45,376,763", idioma: "Español" },
{ nombre: "Estados Unidos", capital: "Washington, D.C.", habitantes: "331,915,076", idioma: "Inglés" },
{ nombre: "Francia", capital: "París", habitantes: "67,081,000", idioma: "Francés" },
{ nombre: "China", capital: "Pekín", habitantes: "1,397,897,720", idioma: "Chino" },
{ nombre: "Brasil", capital: "Brasilia", habitantes: "213,993,437", idioma: "Portugués" }]




// Iterar a través de los datos y crear filas en tbody
datos.forEach(dato => {
    const tr = document.createElement('tr');

    const tdNombre = document.createElement('td');
    tdNombre.innerText = dato.nombre;

    const tdCapital = document.createElement('td');
    tdCapital.innerText = dato.capital;

    const tdHabitantes = document.createElement('td');
    tdHabitantes.innerText = dato.habitantes;

    const tdIdioma = document.createElement('td');
    tdIdioma.innerText = dato.idioma;

    // Agregar las celdas a la fila
    tr.appendChild(tdNombre);
    tr.appendChild(tdCapital);
    tr.appendChild(tdHabitantes);
    tr.appendChild(tdIdioma);

    // Agregar la fila a tbody
    tbody.appendChild(tr);
});

// Agregar tbody a la tabla
table.appendChild(tbody);
table.className = 'table table-striped table-hover';

// Agregar la tabla a tableContent
tableContent.appendChild(table);



/* datos.forEach(dato => {
    const tdNombre = document.createElement('td');
    const tdCapital = document.createElement('td');
    const tdHabitantes = document.createElement('td');
    const tdIdioma = document.createElement('td');
        tdNombre.innerText = dato.nombreombre;
        tdCapital.innerText = dato.capital;
        tdHabitantes.innerText = dato.habitantesabitantes;
        tdIdioma.innerText = dato.idioma;
 
        tbody.appendChild(tdNombre);
        tbody.appendChild(tdCapital);
        tbody.appendChild(tdHabitantes);
        tbody.appendChild(tdIdioma);
 
 
});
    thNombre.innerText='Nombre';
    thCapital.innerText='Capital';
    thHabitantes.innerText='Habitantes';
    thIdioma.innerText='Idioma';
 */


/*


Se crea una variable tableContent que obtiene una referencia al elemento HTML con el ID "tableContent" en el documento HTML.

Se crean elementos HTML para la tabla (table), el encabezado de la tabla (thead), las columnas del encabezado 
(thNombre, thCapital, thHabitantes, thIdioma), y el cuerpo de la tabla (tbody).

Se define un arreglo de objetos llamado datos, que contiene información sobre 5 países diferentes,
 cada uno con nombre, capital, cantidad de habitantes e idioma.

Se utiliza un bucle forEach para iterar a través de los datos de los países. Dentro del bucle,
se crea una fila (tr) para cada país y se crean celdas de datos (td) para el nombre, la capital, la cantidad de habitantes y el idioma del país.

Las celdas de datos se llenan con la información correspondiente del país.

Se agregan las celdas de datos a la fila del país.

La fila completa se agrega al cuerpo de la tabla.

El cuerpo de la tabla se agrega a la tabla.

Finalmente, la tabla se agrega al elemento con el ID "tableContent" en el documento HTML.

En resumen, este código crea una tabla HTML con encabezados de columna y datos de países. 
Utiliza un bucle para generar dinámicamente las filas y las celdas de datos en función de los datos de los países 
proporcionados en el arreglo datos. Luego, agrega la tabla completa al elemento con el ID "tableContent" en tu documento HTML.




*/