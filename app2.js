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

