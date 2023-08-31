
let valores = [8, 1, 7, 4, 2, 9]

for(let indice = 0; indice < valores.length; indice++) {
    //console.log(valores[indice])
    console.log(`A posição ${indice} tem o valor ${valores[indice]}`)
}

//Maneira mais simples Para o percurso do vetor
// FOR IN

for(let indice  in valores) {
    console.log(`A posição ${indice} Usando o FOR IN tem o valor ${valores[indice]}`)
}