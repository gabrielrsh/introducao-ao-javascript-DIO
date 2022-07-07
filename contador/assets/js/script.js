var numeroAtualSpan = document.getElementById("numeroAtual");

var numeroAtual = 0;

function decrement() {
    numeroAtual--;
    numeroAtualSpan.innerHTML = numeroAtual;
}

function increment() {
    numeroAtual++;
    numeroAtualSpan.innerHTML = numeroAtual;
}