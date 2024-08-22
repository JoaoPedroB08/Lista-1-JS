/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numero = Number(prompt("Qual número você deseja verificar no array? "))

if(!num.includes(numero)){
    alert("esse número não existe no array")
}else{
    alert("O indice desse número é: " + num.indexOf(numero))
}