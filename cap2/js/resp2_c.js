function mostrarPromocao() {
  // Cria referência entre os elementos da Página
  var inProduto = document.getElementById("inProduto").value;
  var inPreco = document.getElementById("inPreco");
  var outRespostaPromocao = document.getElementById("outRespostaPromocao");
  var outTerceiroProduto = document.getElementById("outTerceiroProduto");

  // Converte os dados em Número
  var preco = Number(inPreco.value);

  // Pega a metade do Preço para a promoção
  var precoPromocao = preco * 0.5;

  // Exibe os dados
  outRespostaPromocao.textContent =
    inProduto + " - Promoção: Leve 3 por R$: " + (preco * 2 + precoPromocao);
  outTerceiroProduto.textContent =
    "O 3° produto custa apenas R$: " + precoPromocao;
}
// Cria referência com o Botão (Mostrar Promoção)
var btVerPromocao = document.getElementById("btVerPromocao");
// Adiciona um ouvinte de eventos
btVerPromocao.addEventListener("click", mostrarPromocao);
