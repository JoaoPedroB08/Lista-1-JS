// 15) Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

ovoCada = 0.40
ovo1DuziaCada = 0.30
ovo2DuziaCada = 0.25

OvosDoUsuario = Number(prompt('Quantos ovos o senhor(a) deseja comprar: '))

if(OvosDoUsuario < 12){

    calculo1 = OvosDoUsuario * ovoCada
    alert('O valor da compra será de: R$'+calculo1)

}else if(OvosDoUsuario == 12){

    calculo2 = OvosDoUsuario * ovo1DuziaCada
    alert('O valor da compra será de: R$'+calculo2)

}else if(OvosDoUsuario >= 13 <= 24){

    calculo3 = OvosDoUsuario * ovo2DuziaCada
    alert('O valor da compra será de: R$'+calculo3)

}else if(OvosDoUsuario > 24){

    calculo4 = OvosDoUsuario * ovo2DuziaCada
    alert('O valor da compra será de: R$'+calculo4)

}else{

    alert('Digite quantos ovos comprou novamente...')

}
