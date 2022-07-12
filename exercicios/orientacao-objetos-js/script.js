class ContaBancaria {
    constructor(agencia, numero, tipo="conta bancaria") {
        this._agencia = agencia;
        this._numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get agencia() {
        return this._agencia;
    }

    get numero() {
        return this._numero;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    sacar(valor) {
        if(this._saldo < valor) return `Saldo insuficiente para sacar o valor de R$ ${valor}`;
        this._saldo -= valor;
        return `Saque realizado! Saldo atual de R$ ${this._saldo}`;
    }

    depositar(valor) {
        this._saldo += valor;
    }

}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "conta corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(cartaoCredito) {
        this._cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "conta poupança";
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "conta universitária";
    }

    sacar(valor) {
        if(valor >= 500) return "O valor do saque precisa ser menor que R$ 500,00";

        return super.sacar(valor);
    }
}


