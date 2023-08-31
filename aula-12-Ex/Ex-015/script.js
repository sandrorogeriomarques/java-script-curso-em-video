//alert('Olá, Mundo!')
function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    //Verificar o campo de input
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert(`(ERRO!) Verifique os dados e tente novamente`)
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // Correção aqui (checked deve ser td minusculo)
        var genero = ''
        if (fsex[0].checked) { // Correção aqui
            genero = 'homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
                alert('Homen criança menos de 10')
            } else if (idade < 21) {
                //Joven
                img.setAttribute('src', 'foto-joven-m.png')
                alert('Homen joven menos de 21')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                alert('Homen adulto menos de 50')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                alert('Homen idoso mais de 50')
            }
        } else if (fsex[1].checked) { // Correção aqui (checked deve ser td minusculo)
            genero = 'mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
                alert('Mulher criança menos de 10')
            } else if (idade < 21) {
                //Joven
                img.setAttribute('src', 'foto-joven-f.png')
                alert('Mulher joven menos de 21')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                alert('Mulher adulto menos de 50')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                alert('Mulher idoso mais de 50')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}