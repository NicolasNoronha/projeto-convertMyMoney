const convert = (cotacao, quantidade) => {
  return cotacao * quantidade
}

//retorna maximo de 2 digitos
const toMoney = valor => {
  return parseFloat(valor).toFixed(2)
  //return parseFloat(valor.replace(',', '.')).toFixed(2)
}

module.exports = {
  convert,
  toMoney
}