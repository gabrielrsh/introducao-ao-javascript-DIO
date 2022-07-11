/* Utilizar os métodos call e apply para modificar o valor de this */


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá 
    ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Gabriel",
    idade: 25
};

const pessoa2 = {
    nome: "Maria",
    idade: 20
};

const animal = {
    nome: "Pastel",
    idade: 10,
    cor: "cinza"
};

console.log(calculaIdade.call(animal, 12)+"\n");

console.log(calculaIdade.apply(pessoa1, [12]));