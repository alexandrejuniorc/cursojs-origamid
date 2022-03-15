// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

// evento de clique
btnCep.addEventListener("click", handleClick);

// função de clique
function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

// função de buscar o cep
function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //transforma a resposta em texto
    .then((response) => response.text())
    // com a resposta já em texto ela irá mostrar no resultadoCep
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valorDeCompra = document.querySelector(".btc");

function fetchBTC() {
  fetch("https://blockchain.info/ticker")
    //resposta do fetch vai ser em json
    .then((response) => response.json())
    //joinBTC vai ser o resultado de valor de compra
    .then((joinBTC) => {
      valorDeCompra.innerText = ("R$ " + joinBTC.BRL.buy).replace(".", ",");
    });
}
//setInterval(fetchBTC, 30); atualiza o valor de compra a cada 30s
fetchBTC();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnProxima = document.querySelector(".proxima");

const divPiada = document.querySelector(".piada");

function puxarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((piada) => {
      divPiada.innerText = piada.value;
    });
}

btnProxima.addEventListener("click", puxarPiada);

puxarPiada();
