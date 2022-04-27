import { contas } from "./contas.js";
import { novaMensagem } from "./functions.js";

const botaoSubmit = document.querySelector('.botaoSubmit')

botaoSubmit.addEventListener('click', event => {

    event.preventDefault()

    let listaFantasma = document.querySelector('.listaFantasma')

    while(listaFantasma.firstChild){
        listaFantasma.removeChild(listaFantasma.firstChild)
    }

    const form = document.querySelector('.formConta')

    const loginConta = document.querySelector('.input_login').value
    const senhaConta = document.querySelector('.input_senha').value

    for(var i = 0;i<contas.length;i++){
        if(contas[i].login === loginConta && contas[i].senha === senhaConta){
            // ENTRA NA CONTA
            var achou = true
            window.location.href = 'home.html'
            continue
        }
    }
    if(achou == undefined){
        novaMensagem('Login ou senha incorretos')
    }

    form.reset()
})
