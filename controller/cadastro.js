import { escritorDeErros, novaMensagem, verificador } from './functions.js';
import { Conta , contas } from './contas.js'

const botao = document.querySelector('.criarConta')
// const revelaSenha = document.querySelector('revelaSenha')

botao.addEventListener('click', function(event){

    event.preventDefault()

    let listaFantasma = document.querySelector('.listaFantasma')

    // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild

    while(listaFantasma.firstChild){
        listaFantasma.removeChild(listaFantasma.firstChild)
    }

    const form = document.querySelector('.cadastroQuadro')

    const login = document.querySelector('.input_login').value
    const senha = document.querySelector('.input_senha').value
    const confirmaSenha = document.querySelector('.input_confirmaSenha').value

    let arrayDeErros = verificador(login,senha,confirmaSenha)

    if(arrayDeErros.length == 0){
        const novaConta = new Conta(login,senha)
        contas.push(novaConta)
        console.log(contas)
        novaMensagem('Conta criada com sucesso!')
        setTimeout(() => {
            window.location.href = 'login.html'
        },2000)
    }else{
        escritorDeErros(arrayDeErros)
    }

    form.reset()

});