// 2) Crie uma programa que verifique se uma pessoa pode dirigir. Deve ser perguntada a a idade da pessoa e se ela tiver idade suficiente para dirigir (18 anos ou mais), exiba "Você pode dirigir", caso contrário, exiba "Você ainda não pode dirigir".

let MaiorIdade = 18

IdadeUsuario = Number(prompt('Digite sua idade para saber se você pode ou não dirigir'))

if(IdadeUsuario >= 18){

    alert('Você é maior de idade portanto, pode dirigir')

}else if(IdadeUsuario < 18){

    alert('Você é menor de idade, saia deste veículo agora!')

}else{

    alert('Digite um número por favor!')

}