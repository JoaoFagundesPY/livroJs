function calcularValor() {
  // Cria referência aos elementos da Página
  var inValor = document.getElementById("inValor");
  var inTempodeUso = document.getElementById("inTempodeUso");
  var outResultado = document.getElementById("outResultado");

  // Converte os valores de entrada
  var valor = Number(inValor.value);
  var tempoUso = Number(inTempodeUso.value);

  // Processa os dados
  var qtdeUsos = tempoUso / 15;
  var operacoes = Math.ceil(qtdeUsos);
  var pagamento = operacoes * valor;

  // exibe os resultados
  outResultado.textContent = "Valor a Pagar R$: " + pagamento.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);
