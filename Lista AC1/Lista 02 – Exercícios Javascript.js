// 1. Crie uma classe Usuario com os atributos nome e idade. Em seguida, crie um array de objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras maiúsculas.
console.log("1)");
console.log();
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const usuarios = [
    new Usuario("Fabiano", 42),
    new Usuario("marcelo", 25),
    new Usuario("diego", 17),
];

const usuariosMaioresDe18 = usuarios.filter((usuario) => usuario.idade > 18);

console.log("Usuários com idade superior a 18 anos:");
usuariosMaioresDe18.forEach((usuario) => {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log();
});

usuarios.forEach((usuario) => {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log();
});

const nomesMaiusculos = usuarios.map((usuario) => usuario.nome.toUpperCase());

console.log("-------------------");


//Faça um programa que mostre os números impares em um intervalo de 0 a 100.

let resultado = "";
for (let i = 1; i <= 100; i += 2) {
    resultado += `${i} `;
}
console.log(resultado); // 1 3 5 ... 99
console.log("------------------------------------------------------------------------------------------------------------------");

// 2. Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos.

console.log("2)");
console.log();

console.log("Usuários com idade superior a 18 anos:");
usuariosMaioresDe18.forEach((usuario) => {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log("-------------------");
});

console.log("-------------------");
/*3. Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos.*/

console.log("3)");
console.log();

console.log("o primeiro usuário com idade entre 25 e 30 anos")
const usuariosEntre25e30 = usuarios.filter(usuario => usuario.idade >= 25 && usuario.idade <= 30);
const primeiroUsuarioEntre25e30 = usuariosEntre25e30.find(usuario => true);

console.log(`Nome: ${primeiroUsuarioEntre25e30.nome}`);
console.log(`Idade: ${primeiroUsuarioEntre25e30.idade}`);

console.log("-------------------");

/*4. Crie um array de números e filtre apenas os números pares. Em seguida, mapeie esses
números para o dobro de seus valores.*/

console.log("4)");
console.log();

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numerosPares = numeros.filter(numero => numero % 2 === 0);


const numerosDobrados = numerosPares.map(numero => numero * 2);


console.log(numerosDobrados);
console.log("-------------------");

/*5. Crie uma classe Animal com os métodos emitirSom e correr. Crie subclasses Cachorro
e Gato que herdam de Animal e implementam o método emitirSom de forma
diferente para cada classe.*/

console.log("5)");
console.log();

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} emite um som genérico.`);
    }

    correr() {
        console.log(`${this.nome} está correndo.`);
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} (cachorro) late: Au au!`);
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} (gato) mia: Miau!`);
    }
}


const cachorro = new Cachorro("Rex");
cachorro.emitirSom();
cachorro.correr();

const gato = new Gato("Felix");
gato.emitirSom();
gato.correr();
console.log("-------------------");

/*6. Crie uma classe Livro com os atributos titulo e paginas. Crie um array de objetos Livro
e filtre os livros com mais de 300 páginas.*/

console.log("6)");
console.log();

class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}


const livros = [
    new Livro("História Geral do Brasil", 250),
    new Livro("Cem Anos de Solidão", 400),
    new Livro("O Pequeno Príncipe", 150),
    new Livro("Cem Anos de Solidão", 320),
    new Livro("O Apanhador no Campo de Centeio", 280),
];


const livrosComMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);


console.log("Todos os livros:");
console.log(livros);

console.log("\nLivros com mais de 300 páginas:");
console.log(livrosComMaisDe300Paginas);
console.log("-------------------");


/*7. Crie uma classe Carro com os atributos marca e ano. Crie um array de objetos Carro e
encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010.*/

console.log("7)");
console.log();

class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}


const carros = [
    new Carro("Fiat", 2012),
    new Carro("Toyota", 2015),
    new Carro("Chevrolet", 2019),
    new Carro("Volkswagen", 2020),
    new Carro("Toyota", 2022),
];

const primeiroToyota = carros.find(carro => carro.marca === "Toyota");


const carrosFiltrados = carros.filter(carro => carro.ano > 2010);


console.log("Primeiro carro da marca Toyota:", primeiroToyota);
console.log("Carros fabricados após 2010:", carrosFiltrados);

console.log("-------------------");

/*8. Crie uma classe Produto com os atributos nome e preco. Crie um array de objetos
Produto e mapeie esses produtos para um novo array com os preços aumentados em
10%.*/

console.log("8)");
console.log();

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}


const produtos = [
    new Produto("Camiseta", 50.00),
    new Produto("Calça", 100.00),
    new Produto("Tênis", 200.00),
];


const produtosComAumento = produtos.map(produto => {
    const precoComAumento = produto.preco * 1.1;
    return new Produto(produto.nome, precoComAumento.toFixed(3));
});


console.log("Produtos com preços originais:", produtos);


console.log("Produtos com preços aumentados em 10%:", produtosComAumento);

console.log("-------------------");

/*9. Utilizando a classe Produto, encontre o primeiro produto com preço superior a R$
100,00 e altere o nome desse produto para "Produto Caro".*/

console.log("9)");
console.log();

const produtoCaro = produtos.find(produto => produto.preco > 100.00);
if (produtoCaro) {
    produtoCaro.nome = "Produto Caro";
    console.log("Produto com preço superior a R$ 100,00 encontrado e nome alterado para 'Produto Caro':", produtoCaro);
} else {
    console.log("Nenhum produto com preço superior a R$ 100,00 encontrado.");
}

console.log("Produtos com preços originais:", produtos);

console.log("-------------------");

/*10. Crie um array de números e filtre apenas os números divisíveis por 3. Em seguida,
mapeie esses números para o quadrado de seus valores.*/

console.log("10)");
console.log();


const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numerosDivisiveisPor3 = numeros1.filter(numeros1 => numeros1 % 3 === 0);


const numerosAoQuadrado = numerosDivisiveisPor3.map(numeros1 => numeros1 * numeros1);


console.log(numerosAoQuadrado); // [3, 9]




