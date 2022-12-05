let pessoas = [
    {nome: "Larissa", idade: 43},
    {nome: "Everton", idade: 2},
    {nome: "Lana", idade: 12},
    {nome: "Anderson", idade: 85},
    {nome: "Leonardo", idade: 32},
    {nome: "Michael", idade: 19},
    {nome: "Amanda", idade: 32},
    {nome: "Amélia", idade: 5}
]

let soma = 0;
let media

let filtroNome = pessoas.filter(pessoas => {
    if (pessoas.nome[0] === 'A'){
        soma += pessoas.idade
        return true
    }
})

let nomesFinal = filtroNome.map(pessoa => pessoa.nome)

media = soma / nomesFinal.length

console.log(nomesFinal)
console.log(`Média de idade: ${media.toFixed(0)}`)
