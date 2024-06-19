//5) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 

peso = Number(prompt('Qual o seu peso? '))
altura = Number(prompt('Qual a sua altura? '))

imc = (peso / altura * altura)

alert('Seu IMC é de: ' + imc)