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
        const datos = [ { nombre: "Argentina", capital: "Buenos Aires", habitantes: "45,376,763", idioma: "Español" },
        { nombre: "Estados Unidos", capital: "Washington, D.C.", habitantes: "331,915,076", idioma: "Inglés" },
        { nombre: "Francia", capital: "París", habitantes: "67,081,000", idioma: "Francés" },
        { nombre: "China", capital: "Pekín", habitantes: "1,397,897,720", idioma: "Chino" },
        { nombre: "Brasil", capital: "Brasilia", habitantes: "213,993,437", idioma: "Portugués" }]
        
        datos.forEach(dato => {
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
        
