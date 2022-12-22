let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
    // ou seja, pro valor que estiver atualmente
}

function generatePassword() {
    let pass ='';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n)); //chaArt() pra pegar a posição
        
    }

    containerPassword.classList.remove('hide')
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert('Senha copiada com sucesso!');
    navigator.clipboard.writeText(novaSenha);
}

FtqKkVmp
FtqKkVmp