const produtos = {
  "CC": "Cartao de Credito",
  "CD": "Conta Digital",
  "EMP": "Emprestimo",
  "INV": "Investimento"
}

// Lê o código do produto digitado pelo usuário
const codigo = gets()

// TODO: Buscar o nome do produto correspondente ao código informado, ou "Produto desconhecido" se não existir
// Dica: Use o objeto produtos para procurar o código e forneça um valor padrão caso não seja encontrado.
console.log({ codigo })

const desc = produtos[codigo]

const nomeProduto = desc ? desc : 'Produto desconhecido'; /* TODO: implemente a busca no objeto produtos com valor padrão */;
console.log(nomeProduto)
// Imprime o resultado para o usuário
print(nomeProduto)

function gets() {
  return 'EMP'
}

function print(x) {
  return console.log(x)
}
