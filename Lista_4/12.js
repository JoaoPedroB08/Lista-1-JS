// 12) Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!".

var corSemaforo = prompt('Digite a cor que o semáforo está: ').toLowerCase()

if(corSemaforo == "verde"){

    alert('Já que está verde, pode seguir!')

}else if(corSemaforo == "amarelo"){

    alert('Alerta, sinal amarelo, pare!')

}else if(corSemaforo == "vermelho"){

    alert('PARE IMEDIATAMENTE!!!')

}else{

    alert('Digite uma das cores: Vermelho, Verde ou Amarelo...')

}
