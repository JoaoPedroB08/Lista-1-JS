// 13) Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".

let VidaPersonagem = 100

danoCausado = Number(prompt("Digite o dano que irá causar no protagonista"))

VidaRestante = VidaPersonagem - danoCausado

if(VidaRestante <=0){

    alert('Game Over')

}else if(VidaRestante >=1 & VidaRestante <= 20){

    alert('Dano crítico, quase sem hp...')

}else if(VidaRestante >= 21 & VidaRestante <= 50){

    alert('Dano moderado, vida estável')

}else if(VidaRestante >= 51 & VidaRestante <= 100){

    alert('Dano leve, vida boa!')

}else[

    alert('Erro, digite o dano novamente...')

]
