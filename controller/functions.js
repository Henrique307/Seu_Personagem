import { contas } from './contas.js'

export function novaMensagem(mensagem){
    let divFantasma = document.querySelector('.listaFantasma')
    let li = document.createElement('li')
    li.classList.add('mensagem')
    li.textContent = mensagem
    divFantasma.appendChild(li)
}

export function verificador(login,senha,confirmaSenha){

    let arrayDeErros = []

    for(var i = 0;i < contas.length;i++){
        if(contas[i].login === login){
            arrayDeErros.push('Login ja existente.')
        }
    }

    // if(login.length == 0){
    //     arrayDeErros.push('Campo de login vazio')
    // }

    if(login.length < 6){
        arrayDeErros.push('Seu login precisa ter no mínimo 6 caracteres.')
    }
    if(senha.length < 6){
        arrayDeErros.push('Sua senha precisa ter no mínimo 6 caracteres.')
    }

    if(confirmaSenha !== senha){
        //TEM ASSIM !== E ASSIM ==! MAS CE QUER USAR ESSE !== 
        arrayDeErros.push('As senhas não coincidem.')
    }
    return arrayDeErros
}

export function escritorDeErros(arrayDeErros){
    let divFantasma = document.querySelector('.listaFantasma')
    let li = document.createElement('li')
    arrayDeErros.forEach(function(erro){
        li.classList.add('erro')
        li.textContent = erro
        divFantasma.appendChild(li)
    })
}