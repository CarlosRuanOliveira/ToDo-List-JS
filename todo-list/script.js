let taskCount = 1;
/* Detecta se a tecla enter é digitada no input */
function teclaEnter(){
    document.addEventListener('keydown', function (event) {    
                                            if (event.keyCode === 13) {
                                                add();
                                            }
                                        }, {once: true})
}
/* Adiciona a tarefa na lista */
function add(){
    taskCount++;
    const tarefa = document.getElementById("addTarefa").value;
    const fieldset = document.getElementById("tarefas");
    fieldset.innerHTML += "<div class='itens' id='" + taskCount + "'><label class='item' onclick='checked(this)'>"+ tarefa +"<span class='checkmark'></span></label><span class='remove' onclick='remove(this);'></span></div>"
    document.getElementById("addTarefa").value = "";
}
/* Remove uma tarefa da lista */
function remove(e) {
    const pai = e.parentNode;
    if (pai.firstElementChild.classList =="item checked") {
        pai.remove();
    } else {
        alert("Para excluir uma tarefa, primeiro marque-a como concluída");
    }
}
function checked(e) {
    const elemento = e;
    elemento.classList.toggle('checked');
}
