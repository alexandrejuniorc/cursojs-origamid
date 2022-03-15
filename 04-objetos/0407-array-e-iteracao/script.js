// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");

const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerHTML;
  const descricao = curso.querySelector("p").innerHTML;
  const aulas = curso.querySelector(".aulas").innerHTML;
  const horas = curso.querySelector(".horas").innerHTML;

  //quando o nome da variável é o mesmo pode colocar somente o que foi puxado pelo DOM
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetosCursos);
console.log(arrayCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter((n) => n > 100);

console.log(maioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const possuiBaixo = instrumentos.some((item) => {
  return item == "Baixo";
});

console.log(possuiBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
  {
    item: "Arroz",
    preco: "R$ 5,50",
  },
];

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$", "").replace(",", ".");

  return acumulador + precoLimpo;
}, 0);

console.log(valorTotal);
