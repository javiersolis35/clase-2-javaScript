const datos = [{user:'user1',password:'password1'},{user:'user2',password:'password2'},{user:'user3',password:'password3'}]
const formulario = document.querySelector('form');
const validarUsers = () => (user == userDato && password == passwordDatos)?console.log('Usuario Incorrecto');
    formulario.addEventListener('submit',(e) =>{
        e.preventDefault();
        console.log('Submit');
        const inputUser = document.querySelector('#inputUser');
        const inputPassword = document.querySelector('#inputPassword');
        datos.forEach(dato =>{
             validarUsers(inputUser.value,inputPassword.value,dato.password);
        })
           

    })