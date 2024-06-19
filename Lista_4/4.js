// 4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

bonus = 0.05

SalarioUsuario = Number(prompt('Digite o seu sálario: '))
AnosUsuario = Number(prompt('Digite os anos de serviço que você possui: '))

if(AnosUsuario >= 5){

    calculo = SalarioUsuario * bonus
    resultado = calculo + SalarioUsuario
    alert('seu salário com o bonûs será de: '+resultado)

}else if(AnosUsuario < 5){

    alert('Seu salário será de: '+SalarioUsuario)

}else{

    alert('Tente novamente...')

}