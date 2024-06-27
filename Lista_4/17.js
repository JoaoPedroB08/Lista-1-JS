// 17) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

//    CEREJA - CEREJA - CEREJA -> R$100
//    LARANJA - LARANJA - LARANJA -> R$80
//    CEREJA - LARANJA - CEREJA -> R$50
//    LARANJA - CEREJA - LARANJA -> R$25

fruta1 = prompt('Digite qual fruta foi sorteada primeiro (Laranja ou Cereja): ').toLocaleLowerCase()
fruta2 = prompt('Digite qual fruta foi sorteada de segunda (Laranja ou Cereja): ').toLocaleLowerCase()
fruta3 = prompt('Digite qual fruta foi sorteada na terceira (Laranja ou Cereja): ').toLocaleLowerCase()

if(fruta1 == 'cereja' & fruta2 == 'cereja' & fruta3 == 'cereja'){

    alert('JACKPOT!!! você ganhou R$100')

}else if(fruta1 == 'laranja' & fruta2 == 'laranja' & fruta3 == 'laranja'){

    alert('Quase! você ganhou R$80')

}else if(fruta1 == 'cereja' & fruta2 == 'laranja' & fruta3 == 'cereja'){

    alert('Boa tentativa! você ganhou R$50')

}else if(fruta1 == 'laranja' & fruta2 == 'cereja' & fruta3 == 'laranja'){

    alert('você ganhou R$25, mais sorte na próxima!')

}else if(fruta1 != fruta3){

    alert('Infelizmente não foi dessa vez, mas ainda há tempo, nunca é hora de desistir!')

}else{

    alert('Erro, tente digitar novamente as frutas solicitadas!')

}
