const imagem = fetch("./docs.txt");

imagem.then((response) => {
  console.log(response.status);
  if (response.status === 404) {
    console.log("Página não encontrada");
  }
});
