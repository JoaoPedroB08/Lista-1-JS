// 11)  Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

dolares = Number(prompt("qual o valor do dólar? "))
cotacao = Number(prompt('Qual o valor da cotação do dólar? '))

real = dolares * cotacao

if(real >= 5){

    alert('o valor de reais convertidos em dólar é de: R$'+(real)+'. O dólar está caro.')

} else if(real <= 4){

    alert('o valor de reais convertidos em dólar é de: R$'+(real)+'. O dólar está barato.')

}else{

    alert('Ocorreu um erro, tente novamente...')

}
