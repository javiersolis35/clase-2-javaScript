const aElements = document.querySelectorAll('a');
const titleElements = document.querySelector('#title');
const textElements = document.querySelector('#text');
const fatherElement = document.querySelector('#card-body')

const createFormLogin = () => {
    const form = document.createElement('form');
    const inputUser = document.createElement('input');
    const inputPassword = document.createElement('input');
    const inputSend = document.createElement('input');
    const divRow = document.createElement('div');
    const divColUser = document.createElement('div');
    const divColPass = document.createElement('div');
    const divColSend = document.createElement('div');

    divRow.className = 'row';
    divColUser.className = 'col';
    divColPass.className = 'col';
    divColSend.className = 'col';

    form.className = 'form';
    inputUser.placeholder = 'Usuario';
    inputUser.type = 'text';
    inputPassword.placeholder = 'Contraseña';
    inputPassword.type = 'password';
    inputSend.type = 'submit';

    divColUser.appendChild(inputUser);
    divColPass.appendChild(inputPassword);
    divColSend.appendChild(inputSend);
    divRow.appendChild(divColUser);
    divRow.appendChild(divColPass);
    divRow.appendChild(divColSend);
    form.appendChild(divRow);
    fatherElement.appendChild(form);
}

const changeTitleAndText = (title, text) => {
    titleElements.textContent = title;
    textElements.textContent = text;

}

aElements.forEach((aElement, index) => {
    aElement.addEventListener('click', () => {
        if (aElement.textContent == 'Login') {
            changeTitleAndText(aElement.textContent, '');
            createFormLogin();
        } else {
            const form = document.querySelector('form');
            form ? form.style.display = 'none' : '';
            changeTitleAndText(aElement.textContent, 'Contenido del elemento ' + aElement.textContent);
        }
    })
})