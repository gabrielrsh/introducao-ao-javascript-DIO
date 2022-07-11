function substituirPares(arr){
    if(!arr || !arr.length) return -1;

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number") return "O array possui valores inválidos!";
    }

    let novoArray = arr.map(function(elem) {
        return (elem % 2 === 0) ? 0 : elem; 
    } );

    return novoArray;
}

let arr = [0,1,2,3,4,5,6,7,8];

console.log(substituirPares(arr));