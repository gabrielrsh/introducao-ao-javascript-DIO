function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin')
            admins.push(key);
    }
    return admins;
}

function valoresUnicos(array){
    let meuSet = new Set(array);
    return [...meuSet];
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Gabriel', 'Admin');
usuarios.set('Jão', 'User');
usuarios.set('Clodoaldo', 'Admin');

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]


console.log(getAdmins(usuarios));
console.log(valoresUnicos(meuArray));