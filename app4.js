const divContent = document.querySelector('#divContent');
const button = document.createElement('button');
button.innerText = 'mostrar contenido p';
divContent.appendChild(button);

button.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerText = 'Párrafo a mostrar por la app';
    divContent.appendChild(p);
});


/* 

const divContent = document.querySelector('#divContent');: Selecciona un elemento en el documento HTML con el ID "divContent" 
y almacena una referencia a este elemento en la variable divContent. Esto permitirá agregar elementos creados dinámicamente dentro de este contenedor.

const button = document.createElement('button');: Crea un nuevo elemento <button> (botón) utilizando document.createElement() 
y almacena una referencia a este botón en la variable button.

button.innerText = 'mostrar contenido p';: Establece el texto del botón recién creado como "mostrar contenido p" utilizando la propiedad innerText.

divContent.appendChild(button);: Agrega el botón creado dinámicamente como un hijo del elemento con el ID "divContent". 
Esto significa que el botón se insertará dentro de este contenedor en el documento HTML.

button.addEventListener('click', () => { ... });: Agrega un evento de clic al botón. Cuando se hace clic en el botón,
se ejecutará la función de flecha (función anónima) que contiene el código dentro del bloque { ... }.

Dentro de la función de clic, se crea un nuevo elemento <p> (párrafo) utilizando document.createElement() y se almacena en la variable p.

p.innerText = 'Párrafo a mostrar por la app';: Establece el texto del párrafo recién creado como "Párrafo a mostrar por la app" utilizando la propiedad innerText.

divContent.appendChild(p);: Agrega el párrafo creado dinámicamente como un hijo del elemento con el ID "divContent".
Esto significa que el párrafo se insertará dentro del mismo contenedor que el botón en el documento HTML.

En resumen, este código crea un botón dentro de un contenedor con el ID "divContent" en el documento HTML. Cuando se hace clic en el botón, 
se crea un nuevo párrafo con el texto "Párrafo a mostrar por la app" y se agrega también dentro del mismo contenedor.
Esto permite mostrar contenido adicional en la página web cuando se hace clic en el botón.

*/