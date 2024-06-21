const camposFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const respostas = {
        "nome" : e.target.elements["nome"].value,
        "email" : e.target.elements["email"].value,
        "assunto" : e.target.elements["assunto"].value,
        "mensagem" : e.target.elements["mensagem"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(respostas));

    window = alert("Mensagem enviada com sucesso!");
})

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErros = [
    'valueMissing',
    'patternMismatch',
    'tooShort'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um e-mail válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    assunto: { 
        valueMissing: "O campo de assunto não pode estar vazio.",
        typeMismatch: "Por favor, preencha um assunto válido.",
        tooShort: "Por favor, preencha um assunto válido."
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
        typeMismatch: "Por favor, preencha uma mensagem válida.",
        tooShort: "Por favor, preencha uma emensagem válida."
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
   
    tiposDeErros.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}

