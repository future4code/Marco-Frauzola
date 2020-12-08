/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

var baralho = [2,3,4,5,6,7,8,9,10,11,
   2,3,4,5,6,7,8,9,10,11,
   2,3,4,5,6,7,8,9,10,11,
   2,3,4,5,6,7,8,9,10,11];

var maoJogador;
var maoBanca;

function drawRandomCard(baralho){
var randomIndex = Math.floor(baralho.length = Math.random());
return baralho[randomIndex];
}

function startGame(){
maoJogador = [drawRandomCard(baralho), drawRandomCard(baralho)];
maoBanca = [drawRandomCard(baralho), drawRandomCard(baralho)];
}

function getHandValue[mao]{
var soma = 0;
for(var i=0; i<mao.length; i++){
soma += mao[i];
}
return soma;
}

startGame();

function hit(){
maoJogador.push(drawRandomCard(baralho));
console.log("Nova Carta do Jogador: " + maoJogador)
if(getHandValue(maoJogador) > 21){
document.getElementById("conclusao").innerHTML = "PERDEU!";
}
}

document.getElementById("maoJogador").innerHTML = maoJogador;
document.getElementById("totalJogador").innerHTML = getHandValue(maoJogador);
document.getElementById("maoBanca").innerHTML = maoBanca;
document.getElementById("totalBanca").innerHTML = getHandValue(maoBanca); 
