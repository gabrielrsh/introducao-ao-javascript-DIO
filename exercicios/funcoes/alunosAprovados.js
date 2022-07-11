const alunos = [
    {
        nome: "Gabriel",
        nota: 8.5,
        turma: "1A"
    },
    {
        nome: "Jão",
        nota: 5.9,
        turma: "1A"
    },
    {
        nome: "Malu",
        nota: 8,
        turma: "1A"
    },
];

function alunosAprovados(alunos, media) {
    
    let aprovados = [];

    for(aluno of alunos) {
        
        const {nome, nota} = aluno;

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}


console.log(alunosAprovados(alunos, 6));