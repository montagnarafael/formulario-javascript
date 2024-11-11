const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
event.preventDefault();

// Verifica se o nome está vazio
if(nameInput.value === "" ) {
    alert("Por Favor, Preencha Seu Nome");
    return;
}

// Verifica se o email foi preenchido e se é válido
if(emailInput.value === "" || isEmailValid(emailInput.value)) {
    alert("Por Favor, Preencha Seu Email");
    return;
}

//Verifica se a senha foi preenchida
if(passwordInput.value === "") {
    alert("Insira uma Senha");
    return;
}

//Verifica se o select foi selecionado
if(jobSelect.value === "") {
    alert("Selecione sua Situação de Trabalho");
    return;
}

// Se todos os campos estiverem corretos, envia o form
form.submit();
});


// Função que valida email
function isEmailValid(email) {

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-] + @ [a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}