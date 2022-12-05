let pessoas = [
    {nome: "Larissa", idade: 43},
    {nome: "Everton", idade: 2},
    {nome: "Lana", idade: 12},
    {nome: "Leonardo", idade: 32},
    {nome: "Michael", idade: 19},
    {nome: "Amanda", idade: 32},
    {nome: "Amélia", idade: 5}
]

function pegaNomes(){
    let nomePessoas = pessoas.map(pessoa => (pessoa.nome))

    let nomes = nomePessoas.filter(nomePessoas => {
        if (nomePessoas[0] === 'A'){
            return true
        }
    })

    return nomes
}

const tamanho = pegaNomes().length

function pegaMedia(){
    let media
    let indice = 0
    let soma = 0;

    pessoas.forEach(pessoas => {

        if (pessoas.nome === pegaNomes()[indice]){
            soma += pessoas.idade
            indice++
        }
    })

    media = soma / tamanho
    return media.toFixed(0)
}

console.log(pegaNomes())
console.log(`Média de idade: ${pegaMedia()}`)
