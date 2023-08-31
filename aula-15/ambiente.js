let num = [5, 8, 2, 9, 3]
num[3] = 6      //Posição 3 recebe 6
num.push(7)     //Ultima posição recebe 7
num.length      //Tamanho do array
num.sort()      //Ordena os índices

console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetror é o ${num[0]}`)
console.log(`O segundo valor do vetror é o ${num[1]}`)
console.log(`O terceiro valor do vetror é o ${num[2]}`)
console.log(`O quarto valor do vetror é o ${num[3]}`)
console.log(`O quinto valor do vetror é o ${num[4]}`)
console.log(`O sexto valor do vetror é o ${num[5]}`)
 // Extrutura for
for(let indice = 0; indice < num.length; indice++) {
    console.log(num[indice])
}
