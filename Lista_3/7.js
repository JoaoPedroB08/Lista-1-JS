//7) Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.



nota1 = Number(prompt('digite a nota da atividade individual: '))
peso1 = Number(prompt('Qual o valor do peso da nota da atividade individual: '))

nota2 = Number(prompt('digite a nota do seminário em equipe: '))
peso2 = Number(prompt('Qual o valor do peso da nota do seminário em equipe: '))

nota3 = Number(prompt('Digite a nota do projeto final: '))
peso3 = Number(prompt('Qual o valor do peso da nota do projeto final: '))

totalPeso = peso1 + peso2 + peso3
media = ((peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)) / totalPeso 

alert('A sua média: ' + Math.round(media))