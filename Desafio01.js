let pessoas = [
    {nome: "Larissa", idade: 43},
    {nome: "Everton", idade: 2},
    {nome: "Lana", idade: 12},
    {nome: "Leonardo", idade: 32},
    {nome: "Michael", idade: 19},
    {nome: "Amanda", idade: 32},
    {nome: "Amélia", idade: 5}
]

let nomePessoas = pessoas.map(pessoas => (pessoas.nome))

let nomes = nomePessoas.filter(nomePessoas => {
    if (nomePessoas[0] === 'A'){
        return true
    }
})

const tamanho = nomes.length

function pegaMedia(){
    let media
    let indice = 0
    let soma = 0;

    pessoas.forEach(pessoas => {

        if (pessoas.nome === nomes[indice]){
            soma += pessoas.idade
            indice++
        }
            
    })

    media = soma / tamanho
    return media.toFixed(0)
}


console.log(nomes)
console.log(`Média de idade: ${pegaMedia()}`)
