// 9) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

let UserNameCorreto = 'Admin'
let PassWordCorreta = 123

UserName = prompt('Digite o nome do usuário: ')
PassWord = prompt('Digite a sua senha: ')

if(UserName == UserNameCorreto && PassWord == PassWordCorreta){

    alert('Login efetuado com sucesso!')

}else if(UserName != UserNameCorreto && PassWord == PassWordCorreta){

    alert('Nome do usuário incorreto!')

}else if(UserName == UserNameCorreto && PassWord != PassWordCorreta){

    alert('Senha Incorreta!')

}else if(UserName != UserNameCorreto && PassWord != PassWordCorreta){

    alert('Usuário e senha incorretos')

}else[

    alert('Algo deu errado, tente novamente...')

]