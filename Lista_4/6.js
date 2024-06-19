// 6) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso. (DESAFIO: Incluir uma terceira condição para caso receba exatamente igual ao piso)

let Meses = 12

SalarioAnualUsuario = Number(prompt('Digite seu Salário anual: '))
PisoSalarialUsuario = Number(prompt('Digite seu piso salarial: '))

SalarioMensal = SalarioAnualUsuario / Meses

if(SalarioMensal > PisoSalarialUsuario){

    alert('Você recebe: '+SalarioMensal+'. Você recebe de acordo com o seu piso salarial')

}else if(SalarioMensal < PisoSalarialUsuario){

    alert('Você recebe: '+SalarioMensal+'. Você recebe abaixo do seu piso salarial')

}else if(SalarioMensal = PisoSalarialUsuario){

    alert('Você recebe: '+SalarioMensal+'. Que é o mesmo valor do seu piso salarial')

}else[

    alert('Tente Novamente...')

]