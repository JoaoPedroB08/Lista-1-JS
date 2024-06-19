//2) Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.

var horas
var minutos
var segundos

horas = Number(prompt('Quantas horas: '))

minutos = horas * 60
segundos = horas * 3600

alert(`Horas: ${horas}\nMinutos: ${minutos}\n\nSegundos: ${segundos}`)