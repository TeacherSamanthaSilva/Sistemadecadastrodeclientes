let pessoa = {
  nome: "Ana",
  idade: 28,
  profissao: "Desenvolvedora",
  falar: function() {
    console.log("Olá, meu nome é " + this.nome);
  }
};

console.log(pessoa.nome); // "Ana"
pessoa.falar(); // "Olá, meu nome é Ana"

let cliente = {
  nome: "Carlos",
  email: "carlos@email.com",
  telefone: "9999-8888",
  ativo: true
};

let clientes = [
  { nome: "Carlos", email: "carlos@email.com" },
  { nome: "Maria", email: "maria@email.com" },
  { nome: "João", email: "joao@email.com" }
];

console.log(clientes[1].nome); // Maria
