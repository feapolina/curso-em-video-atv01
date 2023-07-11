function contar(){
    let num = window.document.getElementById('num')
     let pegaSeletor = window.document.getElementById('seletor')
    //verificar se o input tá vazio

    if (num.value.length === 0) {
         window.alert('[ERRO] Você precisa digitar um número.')
    } else {
        let n = Number(num.value)
        let i = 1
        pegaSeletor.innerHTML = ''
        while (i <= 10){
          let item = document.createElement('option')
          item.text = `${n} x ${i} = ${n*i}`
          item.value = `tab${i}`
          pegaSeletor.appendChild(item)
          i++
        }
    }


 }