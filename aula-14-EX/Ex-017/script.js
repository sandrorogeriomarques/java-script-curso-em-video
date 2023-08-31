//alert('Olá, Mundo!')
function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor insira um número!')

    } else {
        let n = Number(num.value)
        let c = 0

        //LIMPAR ÁREA TABUADA
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } 
    }
}