function comparaNumeros(a, b){
    if(a == null || b == null) return 'parâmetro(s) inválidos';
    
    const SOMA = a+b;
    const IGUAIS = a===b;

    if(IGUAIS){
        return `Os números ${a} e ${b} são iguais.` + comparaSoma(SOMA);
    }
    else if(typeof(a) == typeof(b)){
        return `Os números ${a} e ${b} não são iguais.` + comparaSoma(SOMA);
        
    }

    return `Os números ${a} e ${b} são de tipos diferentes.`;


}

function comparaSoma(soma){

    if(soma < 10){
        return ` Sua soma é ${soma}, que é menor que 10 e menor que 20.`;
    }
    else if(soma > 20){
        return ` Sua soma é ${soma}, que é maior que 10 e maior que 20.`;
    }
    else if (soma != 10 && soma != 20){
        return ` Sua soma é ${soma}, que é maior que 10 e menor que 20.`;
    } else {
        return (soma === 10) ? ` Sua soma é ${soma}, que é igual a 10.`:
                        ` Sua soma é ${soma}, que é igual a 20.`;
    }
}

console.log(comparaNumeros(3,5));

let contador = 0

console.log(++contador);