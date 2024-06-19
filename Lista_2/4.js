//4) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

VotosCandX = Number(prompt('Quantos votos no candidato x: '))
VotosCandY = Number(prompt('Quantos votos no candidato Y: '))
VotosBranco = Number(prompt('Quantos votos em branco: '))
VotosNulos = Number(prompt('Quantos votos nulos: '))

TotalEleitores = (VotosCandX + VotosCandY + VotosBranco + VotosNulos)

PercentualX = ((VotosCandX / TotalEleitores) * 100)

percentualY = ((VotosCandY / TotalEleitores) * 100)

PercentualBranco = ((VotosBranco / TotalEleitores) * 100)

PercentualNulos = ((VotosNulos / TotalEleitores) * 100)

alert('O total de eleitores é de: ' + TotalEleitores + ' sendo:\n ' + PercentualX + '% de votos no candidato X\n ' + percentualY + '% de votos no candidato Y\n ' + PercentualBranco + '% de votos em branco\n ' + PercentualNulos + '% de votos nulos.')