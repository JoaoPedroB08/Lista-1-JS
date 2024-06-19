// 8) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

alturaUsuario = Number(prompt('Digite sua altura: '))
PesoUsuario = Number(prompt('Digite seu peso: '))

IMC = PesoUsuario / (alturaUsuario * alturaUsuario)

if(IMC < 18){

    alert('Você está abaixo do peso!')

}else if(IMC >=18 && IMC <=25){

    alert('Você está na faixa ideal!')

}else if(IMC > 25){

    alert('Você está acima do peso ideal!')

}else{

    alert('Tente Novamente...')

}
