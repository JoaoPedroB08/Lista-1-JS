/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = []

metasSemana.push("Fazer pentakill")
metasSemana.push("Correr 20km sem cansar")
metasSemana.push("não ser preso")

if(metasSemana[1] == "exercício físico"){
    alert(metasSemana.join(", "))
}else{
    metasSemana.splice(1, 1, "praticar esportes")
    alert(metasSemana.join(", "))
}