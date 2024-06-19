// 10) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

NomeRegiao = prompt('Digite o nome da região que se refere: ')
habitantes = Number(prompt('Digite a quantidade de habitantes nessa região: '))
KmQuadrados = Number(prompt('Digite quantos quilometros tem essa região: '))

densidade = habitantes / KmQuadrados

if(densidade >= 100){

    alert('a densidade da região '+NomeRegiao+' é alta')

}else if(densidade >= 25 && densidade <= 100){

    alert('a densidade da região '+NomeRegiao+' está na média')

}else if(densidade < 25){

    alert('a densidade da região '+NomeRegiao+' é baixa')

}else{

    alert('Algo de errado, tente novamente...')

}