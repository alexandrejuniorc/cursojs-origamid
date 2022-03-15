// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2] = 'Ferrari';
// carros[3] = 'Kia';
// carros[20] = 'Kia';

// console.log(carros.length)

// const li = document.querySelectorAll('li');

// const arrayLi = Array.from(li)

// const obj = {
//   0: 'Andre',
//   1: 'Rafael',
//   2: 'Teste',
//   length: 4,
// }

// const objArray = Array.from(obj);

// console.log(li)
// console.log(arrayLi)

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

// console.log(frutas[2][0].length)

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
//sort coloca em ordem número ou alfabética
// instrumentos.sort();

// const idades = [32,21,33,43,1,12,8];
// idades.sort();

// console.log(instrumentos)
// console.log(idades)

const carros = ["Ford", "Fiat", "VW"];
//unshift adiciona ao começo do Array
carros.unshift("Kia", "Ferrari");
//push adiciona ao final da Array
const novaArray = carros.push("Parati", "Gol");

// console.log(novaArray)

// console.log(carros);

// console.log(carros.shift())

// console.log(carros);

//splice o primeiro valor é quantos itens eu quero mostrar a partir daquele valor
// o segundo valor é quantos itens quero remover
// console.log(carros.splice(2,4,'Fusca'))

// console.log(carros);

// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item5'].copyWithin(2, 0, 2));

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 3));

// const transporte1 = ['Barco', 'Aviao'];
// const transporte2 = ['Carro', 'Moto'];

// let htmlString = '<h2>Título Principal</h2>';

//o método split lê uma string e a divide com base em um separador, que pode ser um caractere qualquer ou uma expressão regular.
// htmlString = htmlString.split('h2');

//junta todos os valores da array e retorna uma String com eles
// se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
// htmlString = htmlString.join('h1')

// console.log(htmlString)

const linguagens = ["html", "css", "js", "php", "python"];

const cloneLinguagens = linguagens.slice();

//pop pega o ultimo item e joga para o primeiro
console.log(linguagens.pop());
console.log(linguagens);
console.log(cloneLinguagens);
