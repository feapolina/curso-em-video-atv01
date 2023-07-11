function contar(){
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Você não pode deixar caixas em branco.')
    } else if (passo.value == 0){
        window.alert('[ERRO] Você não pode colocar passo 0.')
    } else {
        for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)){
            res.innerHTML += `${i} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}