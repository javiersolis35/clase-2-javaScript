// Definicion de funcion 
function saludar1 () {
    console.log('Hola como estan)');
}
const saludar2 = () => {
    console.log('Hola como estan?')
}

const saludar3 = () => console.log('Hola como estan?');

// Llamo la funcion
saludar1();

let numeroA = 10;
let numeroB = 20;

const calcularMayor = (numeroA,numeroB) => numeroA>numeroB?console.log('Numero A es el mayor '):console.log('Numero B es el mayor');
    calcularMayor(numeroA,numeroB);

const calcularNumeroAleatorio = (min, max) => Math.floor(Math.random()*(max-min))+min;

