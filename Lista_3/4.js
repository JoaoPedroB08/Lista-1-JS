//4) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.

let AzulMetro = 120
let caixa = 60
let azulPreço = 45.5


largura = Number(prompt('qual a largura da piscina (metros): '))
comprimento = Number(prompt('Qual o comprimento da piscina (metros): '))

metroQuadrado = largura * comprimento
totalAzulejo = metroQuadrado * AzulMetro
quantCaixa = totalAzulejo / caixa
valorTotal = quantCaixa * azulPreço

alert('Devem ser comprados: ' + totalAzulejo +' azulejos e no total vai dar R$:' + valorTotal)