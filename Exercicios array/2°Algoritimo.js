/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

listaCompras = []

produto1 = prompt("Adicione 1 item: ")
listaCompras.push (produto1)
produto2 = prompt("Adicione outro item: ")
listaCompras.push (produto2)
produto3 = prompt("Adicione outro item: ")
listaCompras.push (produto3)

if(produto3 == "leite"){
    alert(listaCompras)
}else{
    listaCompras.push("leite")
    alert(listaCompras)
}