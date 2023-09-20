// Crear conversor de moneda
// ingresar pesos
// con el boton dolar pasar a dolares
// con el boton euro pasar a euros
// con el boton real pasar a reales




// Tomar botones
// Si presiono un boton
// Revisar si tiene un dato el campo input
// convertir a la moneda en custion

const convertidora = (pesos, monedaExtranjera) => {
    try {
        if (isNaN(pesos) || !pesos < 0) {
            throw new Error('Ingrese Valores numericos positivos');
        }
        return pesos / monedaExtranjera;
    } catch (error) {
        console.log(error.message)
    }

}
const insertarResultado = (resultado) => {
    const displayResutado = document.querySelector('h4');
    displayResutado.innerText = resultado;
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const inputPesos = document.querySelector('input');
        const resultado = convertidora(parseFloat(inputPesos.value), e.target.value);
        insertarResultado(resultado.toFixed(2));
    })
})
