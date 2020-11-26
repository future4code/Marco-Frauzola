// Exercicio 1 - Qual o teste que ele realiza? R: Quer saber se a resposta do usuario é igual a 0 / Para que tipos de números ele imprime no console "Passou no teste"? R: Somente numero pares / Para que tipos de números a mensagem é "Não passou no teste"? R: Numeros impares

// Exercicio 2 - A. R: Para facilitar o usuario a achar o preço das frutas selecionadas / B. R: O preço da fruta Maçã é R$ 2.25. / c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? R: O Default não irá funcionar no programa.

// Exercicio 3 - A. R: Está pedindo para o usuario colocar uma string que converte em numero no prompt / B. R: Esse numero passou no teste / C. R: "Essa mensagem é secreta!!!" - Essa é a mensagem que vai aparecer pois é a condição contrario.

// Exercicio 4 =

// const cnh = Number(prompt("Digite sua idade?"))

// if (cnh >= 18) {
//     console.log("Você pode dirigir")
// } else { 
//     console.log("Você não pode dirigir.")
// }

// Exercicio 5 = 

// const turno = prompt("Digite o seu turno, se é M (Matutino), V (Vespertino), N (Noturno).")

// if (turno == "M") {console.log('Bom dia!')}
// if (turno == "V") {console.log('Boa Tarde!')}
// if (turno == "N") {console.log('Boa Noite!')}
// else {console.log("Digite um turno valido!")}

// Exercicio 6 =

// const turno = prompt("Digite o seu turno, se é M (Matutino), V (Vespertino), N (Noturno).")

// switch (turno) {
//     case "M":
//     console.log('Bom Dia!')
//     break
//     case "V":
//     console.log('Boa Tarde!')
//     break
//     case "N":
//     console.log('Boa Noite!')
//     break
//     default:
//     console.log("Digite um turno valido!")
// }

// Exercicio 7 =

let genero = (prompt("Digite o genero do filme que quer assistir."))
let ingresso = Number(prompt("Digite o preço que vai pagar no ingresso."))

if (genero === "fantasia" && ingresso <= 15) {console.log('Bom filme!')} 
else {console.log("Escolha outro filme :(")}
   