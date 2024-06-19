//6) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 

let kgPlastico = 0.2
let kgPapel = 0.1
let kgMetal = 0.1

qtdPlastico = Number(prompt('Quantos kg de plástico tu quer? '))
qtdPapel = Number(prompt('Quantos kg de papel tu quer? '))
qtdMetal = Number(prompt('Quantos kg de metal tu quer? '))

calculoPL = qtdPlastico * kgPlastico
calculoPA = qtdPapel * kgPapel
calculoM = qtdMetal * kgMetal
resultado = calculoPL + calculoPA + calculoM

alert('Esse será o preço que você terá que pagar: ' + resultado + ' reais')