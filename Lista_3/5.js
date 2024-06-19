//5) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.

territorioBaioIndividuo = 320
territorioBaioCasal = 400
femea = 9
macho = 5
totalBaio = 14

quantCasal = Number(prompt('quantos casais? (max 5) '))

areaDominadaCasal = quantCasal * territorioBaioCasal
areaDominadaIndividuo = (14 - (quantCasal * 2)) * 320
areaTotal = areaDominadaCasal + areaDominadaIndividuo

alert('O total de área dominada pelos leões Baios será de: '+ areaTotal + 'km²')