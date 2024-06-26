// 14) Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:

// a) Ter pelo menos 65 anos
// b) Ter trabalhado pelo menos 30 anos
// c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos


idadeUsuario = Number(prompt('Digite sua idade: '))
anosTrabalhados =Number(prompt('Digite quantos anos você está no seu trabalho: '))

if(idadeUsuario >= 65){

    alert('Você já pode se aposentar!')

}else if(idadeUsuario >= 60 & anosTrabalhados >= 25){

    alert('Você já pode se aposentar!')

}else if(anosTrabalhados >= 30){

    alert('Você já pode se aposentar!')

}else{

    alert('Pelos seus dados, você ainda não pode se aponter...')

}
