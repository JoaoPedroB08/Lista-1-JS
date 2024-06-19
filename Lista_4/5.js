// 5) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7, e "Reprovado" apenas para médias abaixo de 5)

Media = 7 

Nota1 = Number(prompt('Digite a sua primeira nota: '))
Nota2 = Number(prompt('Digite a sua segunda nota: '))
Nota3 = Number(prompt('Digite a sua terceira nota: '))

Soma = Nota1 + Nota2 + Nota3
MediaUsuario = Soma / 3

if(MediaUsuario >= Media){

    alert('Você foi aprovado(a)!')

}else if(MediaUsuario < Media){

    alert('Você foi reprovado(a)!')

}else{

    alert('Tente Novamente...')

}