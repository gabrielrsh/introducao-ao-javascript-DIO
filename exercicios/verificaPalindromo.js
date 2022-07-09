function verificaPalindromo(str) {
    if(!str) return;

    return str.split("").reverse().join("").replaceAll(" ", "") === str.replaceAll(" ", "");
}

function verificaPalindromo2(str) {
    if(!str) return;

    str = str.replaceAll(" ", ""); // retira os espaços
    str = str.toLowerCase();
    
    for(let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length-1-i]) return false;
        console.log(i);
    }

    return true;
}

console.log(verificaPalindromo2("!O mito é otimo!"));
//o mito e otimo

