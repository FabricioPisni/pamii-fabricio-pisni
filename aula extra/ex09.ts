function capitalizar(frase: string): string {
  return frase
    .split(" ")
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ");
}

console.log(capitalizar("aprendendo typescript com exemplos"));
