//criar objeto
function carregar(){
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#imagem');

    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#D3CFD2'
        
    } else if (hora >= 12 && hora < 18){
        // boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#F3820B'
    } else {
        // boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#344553'
    }
}
