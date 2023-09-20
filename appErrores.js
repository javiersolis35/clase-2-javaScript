try {
    const mensaje = 'Error';
    if (mensaje == 'Error') {
        throw new Error('Error de mensaje');
    }
} catch (error) {
    console.log(error);
    console.error(error);
    console.error(error.message);
}

try {
    alerta('mensaje de alert');
} catch (error) {
    console.log(error);
    console.error(error);
    console.error(error.message);
}



const connectionApi = async () => {
    try {
        const response = await fetch('http');
        const data = response.json();
    } catch (error) {
        console.log(error);
        console.error(error);
        console.error(error.message);
    }
}
connectionApi();