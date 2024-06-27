// 18) Em um jogo de tabuleiro com combinação de moeda e dado, temos possibilidades de cara ou coroa (moeda) e números de 1 a 6 (dado). Criar um programa que pergunte ao usuário qual foi o resultado da moeda e do dado, em seguida determinar o que acontece na rodada. Caso o resultado da moeda tenha sido cara, o jogador perde a vez, independente do dado. Mostrar mensagem de "Você perdeu sua vez!". Caso a moeda tenha sido coroa, o jogador pulará o número de casas no tabuleiro que sair na jogada do dado. Mostrar mensagens "Avance X casas no tabuleiro!", sendo X o número que saiu no dado.


var ValorMoeda = prompt('Caiu cara ou coroa: ').toLocaleLowerCase()

if(ValorMoeda == 'coroa'){

    switch(ValorDado = Number(prompt('Digite o valor que saiu no dado (1 a 6): '))){

        case 1:
            alert('Avance 1 casas no tabuleiro!')
            break;
        case 2:
            alert('Avance 2 casas no tabuleiro!')
            break;
        case 3:
            alert('Avance 3 casas no tabuleiro!')
            break;
        case 4:
            alert('Avance 4 casas no tabuleiro!')
            break;     
        case 5:
            alert('Avance 5 casas no tabuleiro!')
            break;
        case 6:
            alert('Avance 6 casas no tabuleiro!')
            break;
        default:
            alert('Erro!')
            break;

    }

}else if(ValorMoeda == 'cara'){

    alert('Você perdeu sua vez!')

}
