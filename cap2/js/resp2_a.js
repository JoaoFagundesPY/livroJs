function calcularPromocao() {
  // Cria referência aos elementos da página
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outPromocao = document.getElementById("outPromocao");
  var outValorPromocao = document.getElementById("outValorPromocao");

  // Converte os valores
  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);

  // Calcula a Promoção
  var promocao = preco * 2;

  // exibe os resultados
  outPromocao.textContent = "Promoção de " + medicamento;
  outValorPromocao.textContent =
    "Leve 2 por apenas R$: " + Math.floor(promocao).toFixed(2);
}
// Cria referencia ao elemento btMostrarPromocao (Botão)
var btMostrarPromocao = document.getElementById("btMostrarPromocao");
// Adiciona um ouvinte de eventos
btMostrarPromocao.addEventListener("click", calcularPromocao);
