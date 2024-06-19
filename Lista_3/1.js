//1) Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.

imposto = 0.2

salarioBruto = Number(prompt('Qual o seu salário bruto? '))

salarioLiquido = salarioBruto - (0.2 * salarioBruto) 

alert('Esse é seu salário líquido: ' + salarioLiquido)