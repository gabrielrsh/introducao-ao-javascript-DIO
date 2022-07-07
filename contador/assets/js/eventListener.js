var numeroAtualSpan = document.getElementById("numeroAtual");
var btnSubtrair = document.getElementById("subtrair");
var btnAdicionar = document.getElementById("adicionar");
var numeroAtual = 0;

btnSubtrair.addEventListener("click", function(){decrement()});
btnAdicionar.addEventListener("click", function(){increment()});

function verificaLimiteInferior(){
    if(numeroAtual==-10)
        return false;
    else return true;
}

function verificaLimiteSuperior(){
    if(numeroAtual==10)
        return false;
    else return true;
}

function verificaNumeroAtual(){
    if(numeroAtual < 0)
        numeroAtualSpan.style.color = "red";
    else if(numeroAtual > 0)
        numeroAtualSpan.style.color = "green";
    else if(numeroAtual == 0)
        numeroAtualSpan.style.color = "black";
}

function decrement() {
    if(verificaLimiteInferior()){
        numeroAtual--;
        verificaNumeroAtual(numeroAtual);
        numeroAtualSpan.innerHTML = numeroAtual;
    }
}

function increment() {
    if(verificaLimiteSuperior()){
        numeroAtual++;
        verificaNumeroAtual(numeroAtual);
        numeroAtualSpan.innerHTML = numeroAtual;
    }
}