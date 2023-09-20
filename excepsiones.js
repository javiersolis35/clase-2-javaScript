try {
    let div ;
    const numA = 10;
    const numB = 0;
    if (numB == 0) {
        throw new Error('error al dividir por cero');
    } else {
        div = numA / numB;
    }
} catch (err) {
    console.error(err);
    console.log(err);
    console.error(err.message);
}