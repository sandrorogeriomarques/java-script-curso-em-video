//alert('Olá, Mundo!')
function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    //VERIFICAR SE INPUTS ESTÃO VAZIOS

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('(ERRO!) Faltam dados')
    } else {
        res.innerHTML = 'Contados:<br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //CASO PASSO FOR 0
        if (p <= 0) {
            window.alert('Passo inválido! CONSIDERANDO PASSO ')
            p = 1           
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}, `
            }
        } else {
            //CONTAGEM DECRESCENTE
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}, `
            }
        }
        res.innerHTML += `🔚 `
    }
}