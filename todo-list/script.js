let taskCount = 0 // Seu valor é incrementado atribuído como o id da div ao criar adicionar uma tarefa
let temaEscuro = false
// Detecta se a tecla enter é digitada no input
function teclaEnter(){
    const inputValor = document.getElementById("addTarefa").value
    document.addEventListener('keydown', function (event) {    
                                            if (event.keyCode === 13 && inputValor) { /* Verifica tecla enter valor do input */
                                                add()
                                                if (temaEscuro){
                                                    escurescer()
                                                }
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
function clarear() {
    temaEscuro = false
    const body = document.querySelector("body")
    const h1 = body.querySelector("h1")
    const btnAbrir = body.querySelector("#abrir")
    const input = body.querySelector("#addTarefa")
    const fieldset = body.querySelector("#tarefas")
    const tarefas = fieldset.querySelectorAll("div")

    body.style.backgroundColor = "#0DC6FF"
    btnAbrir.style.backgroundColor = "white"
    h1.style.color = "white"
    input.style.backgroundColor = "#2EFF79"
    fieldset.style.backgroundColor = "white"

    for (let i = 0; i < tarefas.length; i++) {
        tarefas[i].style.backgroundColor = "#155fe8c5"
        tarefas[i].children[0].style.color = "white"
    }
}
function escurescer() {
    temaEscuro = true
    const body = document.querySelector("body")
    const h1 = body.querySelector("h1")
    const btnAbrir = body.querySelector("#abrir")
    const input = body.querySelector("#addTarefa")
    const fieldset = body.querySelector("#tarefas")
    const tarefas = fieldset.querySelectorAll("div")

    body.style.backgroundColor = "#033240"
    btnAbrir.style.backgroundColor = "#0A95BF"
    h1.style.color = "#0BB3E6"
    input.style.backgroundColor = "#0DC6FF"
    fieldset.style.backgroundColor = "#066380"

    for (let i = 0; i < tarefas.length; i++) {
        tarefas[i].style.backgroundColor = "#0BB3E6"
        tarefas[i].children[0].style.color = "#033240"
    }
}