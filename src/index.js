const alunos = ['Gustavo', 'Julia'];
const alunos2 = alunos.map(function(itemAtual){
 itemAtual = {
 nome: itemAtual,
 nota: '5'
 }
 return itemAtual;
})
alunos2.push({
 nome: 'Lucio',
 nota: '7'
})
alunos2.push({
    nome: 'Paula',
    nota: '9'
})
alunos2.push({
    nome: 'Leandro',
    nota: '3'
})
const alunosBack = alunos2.filter(function(item){
return item.nota >= '6'
})
console.log(alunosBack)