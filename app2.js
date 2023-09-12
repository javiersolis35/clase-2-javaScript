// Crear todo con javascript
// El documento html solo deve tener la etiqueta div con id='divContent'  

// Crear titulo
// Crear un subtitulo 
// Crear dos parrafos
// Crear un boton

const divContent = document.querySelector('#divContent');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const button = document.createElement('button');

h1.innerText = 'Titulo de App';
h3.innerText = 'subtitulo de la App';
p1.innerText = 'contenido de parrafo 1';
p2.innerText = 'contenido de parrafo 2';
button.innerText = 'button';

divContent.appendChild(h1);
divContent.appendChild(h3);
divContent.appendChild(p1);
divContent.appendChild(p2);
divContent.appendChild(button);

/* 

Este código JavaScript crea elementos HTML y luego los agrega como hijos al elemento con el ID "divContent" en tu documento HTML.
 Aquí está la explicación paso a paso:

const divContent = document.querySelector('#divContent');: Se selecciona un elemento HTML con el ID "divContent" y se almacena en la variable divContent.
 Esto permitirá agregar elementos creados dinámicamente a este contenedor en el HTML.

const h1 = document.createElement('h1');: Se crea un elemento h1 (encabezado de nivel 1) y se almacena en la variable h1.

const h3 = document.createElement('h3');: Se crea un elemento h3 (encabezado de nivel 3) y se almacena en la variable h3.

const p1 = document.createElement('p');: Se crea un elemento p (párrafo) y se almacena en la variable p1.

const p2 = document.createElement('p');: Se crea otro elemento p (párrafo) y se almacena en la variable p2.

const button = document.createElement('button');: Se crea un elemento button (botón) y se almacena en la variable button.

A continuación, se establece el contenido de cada uno de estos elementos utilizando la propiedad innerText. Por ejemplo:

h1.innerText = 'Titulo de App'; establece el texto del h1 como "Titulo de App".
h3.innerText = 'subtitulo de la App'; establece el texto del h3 como "subtitulo de la App".
p1.innerText = 'contenido de parrafo 1'; establece el texto del primer párrafo como "contenido de parrafo 1".
p2.innerText = 'contenido de parrafo 2'; establece el texto del segundo párrafo como "contenido de parrafo 2".
button.innerText = 'button'; establece el texto del botón como "button".
Finalmente, se agregan todos estos elementos como hijos del elemento con el ID "divContent" utilizando el método appendChild(). 
Esto coloca estos elementos dentro del contenedor en el orden en que se agregaron.

El resultado final es que en el elemento con el ID "divContent" ahora tendrás un encabezado h1, un encabezado h3,
 dos párrafos p y un botón button con los textos especificados.

*/