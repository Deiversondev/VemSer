/*  Crie uma função que recebe um aluno e adiciona esse aluno à uma lista de alunos (nome, idade) {nome: "aaa", idade: 55} 
    crie uma função que recebe um nome e retorne o aluno que tiver aquele nome (Find) */ 

let nome = 'Deiverson';
let idade = 20;
let alunos = [];

let student = (name , age, list) => {
    list.push({nome : name, idade: age});
}

student(nome,idade, alunos);

let findStudent = alunos.find(aluno => aluno.nome === 'Deiverson' );
console.log(findName);
   