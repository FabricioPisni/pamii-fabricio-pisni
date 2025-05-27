var produto = 'Mouse';
var preco = 59.90;
var disponivel = true;
function exibir(produto, preco, disponivel) {
    return "Produto:, ".concat(produto, ", - Pre\u00E7o:, ").concat(preco, ", - Dispon\u00EDvel:, ").concat(disponivel);
}
console.log(exibir);
