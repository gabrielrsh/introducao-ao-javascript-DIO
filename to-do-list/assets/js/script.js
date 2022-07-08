var btnAdd = document.getElementById("adicionar");
var lista = document.getElementById("lista");
var form = document.getElementById("form");

form.onsubmit = function(e){
    e.preventDefault(); // Impede que recarregue a pagina
    adicionaItem();
    form.reset();
}

function adicionaItem(){
    const textoTarefa = document.getElementById("texto").value;

    if(textoTarefa.trim() !== ""){
        const itemLista = document.createElement("li");
        const checkItem = document.createElement("input");
        const labelItem = document.createElement("label");
        
        checkItem.setAttribute("type", "checkbox");
        checkItem.setAttribute("name", textoTarefa);

        labelItem.append(textoTarefa);
        
        itemLista.append(checkItem, labelItem);
        lista.append(itemLista);
        
    } else {
        alert("Escreva uma tarefa na caixa de texto");
        limpaTexto();
    }
}
