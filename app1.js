const h = document.querySelector('h1');
const p = document.querySelector('p');
console.log(h.textContent);
console.log(p.textContent);
// Agrego una etiqueta h2 y un parrafo más
const h2 = document.createElement('h2');
const p2 = document.createElement('p');
const divContent = document.querySelector('#divContent');
h2.textContent = 'Subtítulo de App';
p2.textContent = 'Contenido de H2 .. Argentina Programa';
divContent.appendChild(h2);
divContent.appendChild(p2);
const button = document.createElement('button');
const divButton = document.querySelector('#divButton');
button.textContent = 'Enviar';
divButton.appendChild(button);


/* 

const h = document.querySelector('h1'); y const p = document.querySelector('p');:
 Estas líneas seleccionan el primer elemento <h1> y el primer elemento <p> encontrados en el documento HTML 
 y almacenan estas referencias en las variables h y p, respectivamente.

console.log(h.textContent); y console.log(p.textContent);: Estas líneas imprimen el contenido de los elementos seleccionados
 (<h1> y <p>) en la consola del navegador utilizando la propiedad textContent. Esto mostrará el texto actual dentro de estos elementos.

const h2 = document.createElement('h2'); y const p2 = document.createElement('p');: Aquí se crean dinámicamente un nuevo elemento <h2>
 (encabezado de nivel 2) y un nuevo elemento <p> (párrafo) utilizando document.createElement(), y se almacenan en las variables h2 y p2,
  respectivamente.

h2.textContent = 'Subtítulo de App'; y p2.textContent = 'Contenido de H2 .. Argentina Programa';: 
Estas líneas establecen el texto dentro de los elementos <h2> y <p2> recién creados, respectivamente.

divContent.appendChild(h2); y divContent.appendChild(p2);: Aquí, los elementos <h2> y <p2> se agregan como hijos del elemento con el ID "divContent" 
en el documento HTML utilizando appendChild(). Esto coloca estos elementos dentro del contenedor con ese ID.

const button = document.createElement('button');: Se crea un nuevo elemento <button> (botón) dinámicamente y se almacena en la variable button.

const divButton = document.querySelector('#divButton');: Se selecciona el elemento con el ID "divButton" y se almacena en la variable divButton.

button.textContent = 'Enviar';: Se establece el texto del botón recién creado como "Enviar".

divButton.appendChild(button);: El botón se agrega como hijo del elemento con el ID "divButton" utilizando appendChild().
 Esto coloca el botón dentro del contenedor con ese ID.

En resumen, el código selecciona elementos existentes (<h1> y <p>), crea nuevos elementos (<h2>, <p>, y <button>) dinámicamente, 
establece el contenido de los elementos creados y los agrega como hijos de contenedores específicos en el documento HTML.

*/