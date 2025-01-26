//  OBJETIVO 1
//quando clicarmos na seta de avancar, temos que mostrar o proximo cartao da lista.
//passo 1 - dar um jeito de pegar o elemento HTML da seta avancar*/
//console.log(cartoes); lista no console as listas do codigo//
// passo 2 - dar um jeito de identificar oo clique do usuario na seta avancar//
// passo 4 - buscar o cartaoo que está selecionado e esconder//
// passo 3 - fazer aparecer o proximo cartao da lista*/

//OBJETIVO 2
//quando clicarmos na seta de voltar, temos que mostrar o cartao anterior da lista
// passo 1- dar um jeito de pegar o elemento HTML da seta voltar
// passo 2- dar um jeito de identificar o clique doo usuario nma seta voltar
// passo 3- fazer aparecer o cartao anterior da lista
// passo 4 - buscar o cartao que esta selecionado e esconder

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado(esconderCartaoSelecionado);

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
};