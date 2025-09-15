async function buscarDados() {
  try {
    let resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    let dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

buscarDados();
 