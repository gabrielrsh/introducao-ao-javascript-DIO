/* Multiplicar numeros de um array usando map */
const numeros = [1,2,3,4,5];

/* Sem usar thisArg */
function dobraNumeros(arr){
    return arr.map(item => item*2);
}
console.log(dobraNumeros(numeros));

/* Usando thisArgs */
const maca = {
    value: 2
};

const laranja = {
    value: 3
};


function mapComThis(arr, thisArgs) {
    return arr.map(function(item){
       return item * this.value;
    }, thisArgs);
}

console.log(mapComThis(numeros, laranja));
