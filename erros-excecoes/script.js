function verificaArray(arr, len) {

    try{
        if(!arr && !len) throw new ReferenceError("Parâmetros inválidos!");
    
        if(typeof(arr) !== 'object') throw new TypeError("Array inválido!");

        if(typeof(len) !== 'number') throw new TypeError("Valor do tamanho inválido!");
    
        if(arr.length != len) throw new RangeError("O tamanho enviado não corresponde ao do array!");

        return arr;
    } 
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Erro: "+e.name);
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("Erro: "+e.name);
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log("Erro: "+e.name);
            console.log(e.message);
        } else {
            console.log("Erro inesperado: " + e);
        }
    }
}

const meuArray = [0,1,2];
console.log(verificaArray(meuArray, 3));