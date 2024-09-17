// Exercicio 1

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Branco"
};

for (x in carro){
    console.log(`${x}:${carro[x]}`);
}

// Exercicio 2

let livro = {
    titulo: "O Heroi e a Deusa",
    autor:  "Jean Houston",
    anopublic: 1996,
    genero: "Mitologia/História"
};

for(x in livro){
    if (x === "editora"){
        console.log("Seu livro tem editora")
    } 
    else{
        livro.editora = "Bertand Brasil"
    }

};

console.log(livro)

// Exercicio 3


let livro = {
  quantidade: 500,
  preçomole: 50,
  capadura: 100,
  capamole: 200,
  preçoduro: 70,
};

function filtrarprop(numero, livro) {

  let novoobj = {};
  for (x in livro) {
    if (livro[x] >= numero) {
      novoobj[x] = livro[x];
    }
  }

  console.log(novoobj)
}

filtrarprop(100, livro)

// Exercicio 4

const pessoas = [
  { nome: "Claudia", idade: 23, cidade: "Porto Seguro" },
  { nome: "Mateus", idade: 50, cidade: "Manaus" },
  { nome: "Maria", idade: 19, cidade: "Minas Gerais" },
  { nome: "Kaua", idade: 37, cidade: "Curitiba" },
  { nome: "João", idade: 33, cidade: "São Paulo" },
];

for (pessoa of pessoas) {
  console.log(`Nome ${pessoa.nome},Idade ${pessoa.idade},Cidade ${pessoa.cidade}`);
}

// Exercicio 5

const alunos = [
  { nome: "Claudia", nota1: 6, nota2: 8 },
  { nome: "Mateus", nota1: 5, nota2: 9 },
  { nome: "Maria", nota1: 9, nota2: 5 },
  { nome: "Kaua", nota1: 4, nota2: 7 },
  { nome: "João", nota1: 7, nota2: 5 },
];

let média = null
let soma = null
for (notas of alunos) {
  soma = notas.nota1 + notas.nota2
  média = soma / 2
  console.log(`A média de ${notas.nome} é ${média}`)
  média = null
  soma = null
}

// Exercicio 6

const funcionarios = [
  { nome: "Claudia", cargo: "Gerente", salario: 8500 },
  { nome: "Mateus", cargo: "Cozinheiro", salario: 5000 },
  { nome: "Maria", cargo: "Chefe", salario: 15000 },
  { nome: "Kaua", cargo: "Auxiliar de Limpeza", salario: 1500 },
  { nome: "João", cargo: "Ajudante de Cozinha", salario: 2500 },
];

let minimo = 3000

for (funcionario of funcionarios) {
  if (funcionario.salario >= minimo) {
    console.log(`O Salario de ${funcionario.nome} é ${funcionario.salario}`);
  }
}

// Exercicio 7

const produtos = [
  { nome: "Caneta", preço: 5 },
  { nome: "Borracha", preço: 2 },
  { nome: "Lapis", preço: 3 },
];

produtos.forEach(produto => {
  produto.preço = produto.preço * 0.9;
  console.log(`O novo preço de ${produto.nome} é ${produto.preço}`);
});

// Exercicio 8

const filmes = [
  { titulo: "Interestellar", diretor: "Christopher Nolan", anolançamento: 2014 },
  { titulo: "Homem aranha de volta ao lar", diretor: "Jon Watts", anolançamento: 2017 },
  { titulo: "harry potter e a pedra filosofal", diretor: "Chris Columbus", anolançamento: 2001 },
];

novoarray = []
filmes.forEach(filme => {
  novoarray.push(filme.titulo);
});

console.log(novoarray)

// Exercicio 9

const clientes = [
  { nome: "Claudia", idade: 23, cidade: "Porto Seguro" },
  { nome: "Mateus", idade: 50, cidade: "Manaus" },
  { nome: "Maria", idade: 19, cidade: "Minas Gerais" },
  { nome: "Kaua", idade: 37, cidade: "Curitiba" },
  { nome: "João", idade: 33, cidade: "São Paulo" },
];

count = 0
clientes.forEach(cliente => {
  if (cliente.idade > 30)
    count += 1
});

console.log(`Na loja existem ${count} clientes com mais de 30 anos`)

// Exercicio 10

const vendas = [
  { produtos: "Refri", quantidade: 23, preço: 7 },
  { produtos: "Açucar", quantidade: 50, preço: 10 },
  { produtos: "1 kg de Frango", quantidade: 19, preço: 20 },
  { produtos: "Feijão", quantidade: 37, preço: 15 },
  { produtos: "Arroz", quantidade: 33, preço: 20 },
];
soma = 0
vendas.forEach(vendas => {
  soma = vendas.quantidade * vendas.preço
});

console.log(`A loja teve um total de ${soma} reais de venda`)

// Exercicio 11

const pedidos = [
  { cliente: "João", produto: "Desifetante", quantidade: 7 },
  { cliente: "Cleber", produto: "Esponja", quantidade: 10 },
  { cliente: "Jackson", produto: "Bom-Cheiro", quantidade: 20 },
  { cliente: "Jacques", produto: "Detergente", quantidade: 15 },
  { cliente: "Eduardo", produto: "Bombril", quantidade: 20 },
];

organizarcliente = []

pedidos.forEach(pedido => {
  organizarcliente.push(pedido.cliente, pedido.quantidade)
});

console.log(`O total de pedidos de cada cliente é \n${organizarcliente}`)

// Exercicio 12

const estoque = [
  { produto: "Desifetante", quantidade: 150, minimo: 150 },
  { produto: "Bombril", quantidade: 100, minimo: 200 },
  { produto: "Esponja", quantidade: 200, minimo: 300 },
  { produto: "Cloro", quantidade: 100, minimo: 150 },
  { produto: "Qboa", quantidade: 200, minimo: 250 },
];

estoque.forEach(item => {
  if (item.quantidade < item.minimo)
    item.quantidade *= 2
});

console.log(estoque)

// Exercicio 13

const carrinho = {
  itens: [
    { nome: "Caneta", quantidade: 3, precoUnitario: 1.5 },
    { nome: "Caderno", quantidade: 2, precoUnitario: 10.0 },
    { nome: "Borracha", quantidade: 1, precoUnitario: 0.5 },
    { nome: "Lápis", quantidade: 5, precoUnitario: 0.8 }
  ]
};
valortotal = 0
carrinho.itens.forEach(item => {
  valortotal += item.precoUnitario * item.quantidade
});

console.log(`O valor total do carrinho foi de ${valortotal} reais`)

// Exercicio 14

const empresa = {
  departamentos: [
    { nome: "Recursos Humanos", funcionarios: ["Ana", "Carlos", "Beatriz"] },
    { nome: "TI", funcionarios: ["João", "Mateus", "Paula"] },
    { nome: "Financeiro", funcionarios: ["Claudia", "José", "Marcos"] }
  ]
};

for (let i in empresa.departamentos) {
  const departamento = empresa.departamentos[i];
  for (let funcionario of departamento.funcionarios) {
    console.log(`${funcionario} trabalha no departamento de ${departamento.nome}`);
  }
}

// Exercicio 15

const transacoes = [
  { tipo: 'entrada', valor: 100 },
  { tipo: 'saida', valor: 50 },
  { tipo: 'entrada', valor: 200 },
  { tipo: 'saida', valor: 30 }
];

let saldoFinal = 0;

transacoes.forEach(transacao => {
  if (transacao.tipo === 'entrada') {
    saldoFinal += transacao.valor;
  } else if (transacao.tipo === 'saida') {
    saldoFinal -= transacao.valor;
  }
});

console.log('Saldo Final:', saldoFinal);

