const buttonsElements = document.querySelectorAll('button');


    buttonsElements.forEach( button => {
        button.addEventListener('click', (e) =>{
            const display = document.querySelector('#display');
            console.log('Clik in button ->'+e.target.value );
            display.textContent = e.target.value;
        })
    } )