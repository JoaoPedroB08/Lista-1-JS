// 16) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno

Lado1 = Number(prompt("Digite o valor do primeiro lado do triângulo: "))
Lado2 = Number(prompt('Digite o valor do segundo lado do triângulo: '))
Lado3 = Number(prompt('Digite o valor do terceiro lado do triângulo: '))

if(Lado1 == Lado2 & Lado1 == Lado3){

    alert('Este triângulo mencionado é equilátero!')

}else if(Lado1 == Lado2 || Lado1 == Lado3 || Lado2 == Lado3){

    alert('Este triângulo mencionado é isóceles!')

}else if(Lado1 != Lado2 != Lado3){

    alert('Este triângulo mencionado é escaleno!')

}else{

    alert('Digite um número para cada lado válido!')

}
