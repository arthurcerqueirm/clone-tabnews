function somar(numero1, numero2){
  if (typeof numero1  !== "number" || typeof numero2 !== "number" )
    return "Erro"
  return parseFloat((numero1 + numero2).toFixed(3))

}

exports.somar = somar