let num = window.document.getElementById('num')
let pegaSeletor = window.document.getElementById('seletor')
let res  = window.document.getElementById('res')
let valores = []


function isNumero(n){
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l){
if (l.indexOf(Number(n)) != -1) {
  return true 

} else {
  return false
}
}



function adicionar() {
  
  //verificar se o input tá vazio
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    pegaSeletor.appendChild(item)
    res.innerHTML = ''


  } else {
      window.alert('Valor inválido ou já encontrado na lista.')
  }
  num.value = ''
  num.focus()

}

 function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let totalElementos = valores.length
    let maior = valores[0]
    let menor = valores[0]

    let soma = 0
    let media = 0
    for (let i in valores){
      soma += valores[i]
      if (valores[i] > maior)
          maior = valores[i]
      if (valores[i] < menor)
          menor = valores[i]
    }
    media = soma / totalElementos


    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${totalElementos} números cadastrados. </p>`
    res.innerHTML += `<p> O maior valor informado foi: ${maior}</p>`
    res.innerHTML += `<p> O menor valor informado foi: ${menor}</p>`
    res.innerHTML += `<p> Soma dos valores: ${soma}</p>`
    res.innerHTML += `<p>Média: ${media}</p>`
  }
 }