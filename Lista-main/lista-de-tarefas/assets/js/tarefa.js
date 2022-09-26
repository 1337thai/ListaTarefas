const novaTarefa = document.querySelector('[data-form-button]')
//criando o evento de clique
novaTarefa.addEventListener('click',(evento) =>{
    evento.preventDefault()
    //pegando o input do HTML
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    //pegando o valor de input (o que o usuário vai digitar)
    const valor = input.value
    //apagando a mensagem do input
    //criando o elemento li
    const tarefa = document.createElement('li')
    //colocando um efeito CSS no meu texto
    tarefa.classList.add('task')
    //colocando a variavel valor denteo de conteudo
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(botao())
    //botao excluir
    tarefa.appendChild(botaoExclui())

    lista.appendChild(tarefa)
    input.value = ""
})
//criando o botão
const botao = () =>{
    //criando o elemento botão
    const botaoConclui = document.createElement('button')
    
    botaoConclui.innerHTML = 'concluir'
    //criando o evento de clique no botão

    //criando o evento de clique para o botão
    botaoConclui.addEventListener('click',concluir)
        

    return botaoConclui
}

//criar a função para concluir tarefa
const concluir = (evento) =>{
    
    //capturando o elemente botaoConclui
    const botaoConclui = evento.target

    //vamos usar oparentElement para subir um nó na arvore do DOM ( entrar no li)

    const tarefaCompleta = botaoConclui.parentElement
    
    /*Pegando a classe 'done' do CSS (para fazer o risquinho)*/
    tarefaCompleta.classList.toggle('done')
}

    //fazendo o botão deletar
    const botaoExclui = () =>{
        ///criando o elemento botão
        const deletaBotao = document.createElement('button')
        ///colocando texto no botão
        deletaBotao.innerHTML = 'deletar'
        //colocando o evento deletarBotao
        deletaBotao.addEventListener('click',deletarTarefa)
        return deletaBotao
    }

    //criando função para deletar tarefa
    const deletarTarefa = (evento) =>{
        //capturando o botão
        const deletarBotao = evento.target
        //usando o parentElement para subir um nó no dom e pegar o <li>
        const tarefaCompleta = deletarBotao.parentElement
        //remover o texto da tarefa 
        tarefaCompleta.remove()
        return deletarBotao
    }
