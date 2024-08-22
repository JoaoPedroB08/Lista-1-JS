/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/

let tarefas = []

pergunta1 = prompt("Adicione uma tarefa à lista: ")
tarefas.push(pergunta1)
pergunta2 = prompt("Adicione uma tarefa à lista: ")
tarefas.push(pergunta2)
pergunta3 = prompt("Adicione uma tarefa à lista: ")
tarefas.push(pergunta3)

tarefas.splice(1, 1)
tarefas.push("ligar para o médico")

alert(tarefas.join(", "))

