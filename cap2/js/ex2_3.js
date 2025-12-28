function mostrarPromocao() {
  // Cria referência aos elementos manipulados no programa
  var inVeiculo = document.getElementById("inVeiculo");
  var inPreco = document.getElementById("inPreco");
  var outVeiculo = document.getElementById("outVeiculo");
  var outEntrada = document.getElementById("outEntrada");
  var outParcela = document.getElementById("outParcela");

  // Obtém conteúdo dos campos de entrada
  var veiculo = inVeiculo.value;
  var preco = Number(inPreco.value);

  // Calcula valor da entrada e das parcelas
  var entrada = preco * 0.5;
  var parcela = (preco * 0.5) / 12;

  // Altera o conteúdo dos parágrafos de resposta
  outVeiculo.textContent = "Promoção: " + veiculo;
  outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
  outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}
// Cria uma referência ao btVerPromocao (Botão)
var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", mostrarPromocao);
