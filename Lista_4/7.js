// 7) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

idadeUsuario = Number(prompt("Digite sua idade: "))
ComorbidadeUsuario = prompt('Responda com S (para "Sim") ou N (para "não") se você possui alguma comorbidade: ')

if(idadeUsuario >= 60 || ComorbidadeUsuario == "S" || ComorbidadeUsuario == "s"){

    alert('Você já pode se vacinar! :)')

}else{

    alert('Você não pode se vacinar ainda... :(')

}