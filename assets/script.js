let dolar = 5.63;

const realInput = document.querySelector("#brl");
const dolarInput = document.querySelector("#usd");

dolarInput.addEventListener("keyup", () => {
  converter("dolar-to-real");
});

realInput.addEventListener("keyup", () => {
  converter("real-to-dolar");
});

dolarInput.addEventListener("blur", () => {
  dolarInput.value = formatarMoeda(dolarInput.value);
});

realInput.addEventListener("blur", () => {
  realInput.value = formatarMoeda(realInput.value);
});

dolarInput.value = "1000,00";
converter("dolar-to-real");

function consertarValor(value) {
  let valorConsertado = value.replace(",", ".");
  let valorFloat = parseFloat(valorConsertado);
  if (isNaN(valorFloat)) {
    valorFloat = 0;
  }
  return valorFloat;
}

function formatarMoeda(value) {
  let valorConsertado = consertarValor(value);
  let options = {
    useGrouping: false,
    minimumFractionDigits: 2,
  };
  let formatar = new Intl.NumberFormat("pt-BR", options);
  return formatar.format(valorConsertado);
}

function converter(type) {
  if (type == "dolar-to-real") {
    let valorConsertado = consertarValor(dolarInput.value);
    let resultado = valorConsertado * dolar;
    resultado = resultado.toFixed(2);
    realInput.value = formatarMoeda(resultado);
  }

  if (type == "real-to-dolar") {
    let valorConsertado = consertarValor(realInput.value);
    let resultado = valorConsertado / dolar;
    resultado = resultado.toFixed(2);
    dolarInput.value = formatarMoeda(resultado);
  }
}
