interface Livro {
  titulo: string;
  autor: string;
  paginas: number;
}

let livro: Livro = {
  titulo: "É assim que acaba",
  autor: "Colleen Hoover",
  paginas: 256,
};

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Número de páginas: ${livro.paginas}`);
