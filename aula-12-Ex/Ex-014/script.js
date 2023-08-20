//alert('Olá, Mundo!')
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} Horas,`
    
    if (hora >= 0 && hora < 12) {
        window.document.body.style.backgroundColor = 'yellow'
        imagem.src = 'manha.png'
        msg.innerHTML = `Agora são ${hora} Horas, Bom dia!`
    } else if (hora <=18) {
        window.document.body.style.backgroundColor = 'orange'
        imagem.src = 'tarde.png'
        msg.innerHTML = `Agora são ${hora} Horas, Boa tarde!`
    } else {
        window.document.body.style.backgroundColor = 'black'
        imagem.src = 'noite.png'
        msg.innerHTML = `Agora são ${hora} Horas, Boa Noite!`
    }
}
