// 3) Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

Numero1Usuario = Number(prompt('Digite um número: '))
Numero2usuario = Number(prompt('Digite outro número: '))

if(Numero1Usuario > Numero2usuario){

    alert('Entre os números digitados o maior é: '+Numero1Usuario)

}else if(Numero2usuario > Numero1Usuario ){
    
    alert('Entre os números digitados o maior é: '+Numero2usuario)

}else{

    alert('Provavelmente os números são iguais.')

}