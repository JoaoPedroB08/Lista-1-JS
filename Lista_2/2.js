//2) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 

var totaldias = 365
var totalsemanas = 52
var totalmeses = 12

anoNasc = Number(prompt('Digite o ano do seu nascimento no formato (YYYY): '))
anoAtual = Number(prompt('Digite o ano atual que você está no formato (YYYY): '))

resultado = anoAtual - anoNasc
resultdias = resultado * totaldias
resultadosemanas = resultado * totalsemanas
resultadomeses = resultado * totalmeses

alert('Você tem:\n' + resultado + ' anos \n' + resultadomeses + ' meses\n' + resultadosemanas + ' semanas\n' + resultdias + ' dias')