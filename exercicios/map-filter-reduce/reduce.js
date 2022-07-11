/* Soma todos numeros de um array */

const numeros = [1,2,3,4,5];
soma = numeros.reduce(function(prevValue, currValue) { 
    return currValue + prevValue;
});
console.log(soma);


function calculaSaldo(lista, saldoDisponivel) {
    let saldoFinal = lista.reduce(function(prevValue, currValue) {
        return prevValue - currValue.preco;        
    }, saldoDisponivel);

    return saldoFinal;
}

const listaProdutos = [
    {
        nome: 'A',
        preco: 100.20
    },
    {
        nome: 'B',
        preco: 15.80
    },
    {
        nome: 'C',
        preco: 14
    }
];
let saldoDisponivel = 800;

console.log(calculaSaldo(listaProdutos, saldoDisponivel));