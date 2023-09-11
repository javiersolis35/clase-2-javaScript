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


// Crear todo con javascript
// El codumento html solo deve tener la etiqueta div con id='divContent'  

// Crear titulo
// Crear un subtitulo 
// Crear dos parrafos
// Crear un boton

