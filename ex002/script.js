function verificar(){
    var date = new Date()
    var ano = date.getFullYear();
    var res = window.document.querySelector('div#res');
    var inputAno = window.document.querySelector('input#ano');

    // verificando se está vazio ou se a data é maior que o ano atual:

    if (inputAno.value.length == 0 || inputAno.value > ano){
        window.alert('[ERRO] Verifique o ano fornecido e tente novamente.')
    } else {
        var sex = window.document.getElementsByName('radsex')
        var idade = ano - Number(inputAno.value)
        var genero = ''
        
        // criando imagens dinamicamente

        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // adicionando um ID à imagem criada por javascript pq ela vem sem.

        if (sex[0].checked) { // se masculino for selecionado,
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                // bebe
                img.setAttribute('src', 'images/homem_bebe.jpg')
            } else if (idade < 10) {
                // crianca
                img.setAttribute('src', 'images/homem_crianca.jpg')
            } else if (idade < 14) {
                // pre adolescente
                img.setAttribute('src', 'images/homem_pre_adolescente.jpg')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src', 'images/homem_adolescente.jpg')
            } else if( idade < 30) {
                // adulto
                img.setAttribute('src', 'images/homem_adulto.jpg')
            } else if (idade < 55) {
                // mature 
                img.setAttribute('src', 'images/homem_mature.jpg')
            } else if (idade < 100) {
                // idoso
                img.setAttribute('src', 'images/homem_velho.jpg')
            }
            
        } else if (sex[1].checked) { // se mulher for selecionado
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                // bebe
                img.setAttribute('src', 'images/mulher_bebe.jpg')
            } else if (idade < 10) {
                // crianca
                img.setAttribute('src', 'images/mulher_crianca.jpg')
            } else if (idade < 14) {
                // pre adolescente
                img.setAttribute('src', 'images/mulher_pre_adolescente.jpg')
            } else if (idade < 18) {
                // adolescente
                img.setAttribute('src', 'images/mulher_adolescente.jpg')
            } else if( idade < 30) {
                // adulto
                img.setAttribute('src', 'images/mulher_adulta.jpg')
            } else if (idade < 55) {
                // mature 
                img.setAttribute('src', 'images/mulher_mature.jpg')
            } else if (idade < 100) {
                // idoso
                img.setAttribute('src', 'images/mulher_idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // adicionar algo como imagem
    }


}


