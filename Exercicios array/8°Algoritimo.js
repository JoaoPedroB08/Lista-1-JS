/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = []

tarefas1 = prompt("fala uma tarefa ai que se tem que fazer: ")
tarefasLimpeza.push(tarefas1)
tarefas2 = prompt("fala uma tarefa ai que se tem que fazer: ")
tarefasLimpeza.push(tarefas2)
tarefas3 = prompt("fala uma tarefa ai que se tem que fazer: ")
tarefasLimpeza.push(tarefas3)
tarefas4 = prompt("fala uma tarefa ai que se tem que fazer: ")
tarefasLimpeza.push(tarefas4)

tarefasLimpeza.splice(2,1)
tarefasLimpeza.splice(1, 1, "limpar banheiro")

alert(tarefasLimpeza.join(", "))