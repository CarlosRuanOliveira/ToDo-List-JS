let taskCount = 0 // Seu valor é incrementado atribuído como o id da div ao criar adicionar uma tarefa
// Detecta se a tecla enter é digitada no input
function teclaEnter(){
    const inputValor = document.getElementById("addTarefa").value
    document.addEventListener('keydown', function (event) {    
                                            if (event.keyCode === 13 && inputValor) { /* Verifica tecla enter valor do input */
                                                add()
                                            }
                                        }, {once: true})
}
// Adiciona a tarefa na lista
function add(){
    taskCount++
    let input = document.getElementById("addTarefa")
    const fieldset = document.getElementById("tarefas")

    const div = document.createElement('div')
    div.setAttribute('class', 'itens')
    //div.setAttribute('id', localStorage.taskCount)
    div.setAttribute('id', taskCount)

    const label = document.createElement('label')
    label.setAttribute('class', 'item')
    label.setAttribute('onclick', 'checked(this)')

    const spanCheckbox = document.createElement('label')
    spanCheckbox.setAttribute('class', 'checkmark')

    label.innerHTML = input.value
    label.appendChild(spanCheckbox)

    const spanRemove = document.createElement('label')
    spanRemove.setAttribute('class', 'remove')
    spanRemove.setAttribute('onclick', 'remove(this)')

    div.appendChild(label)
    div.appendChild(spanRemove)

    fieldset.appendChild(div)

    input.value = ""
}
/* Remove uma tarefa da lista */
function remove(element) {
    const pai = element.parentNode
    if (pai.firstElementChild.classList == "item checked") {
        pai.remove()
    } else {
        alert("Para excluir uma tarefa, primeiro marque-a como concluída")
    }
}
function checked(element) {
    element.classList.toggle('checked')
}
