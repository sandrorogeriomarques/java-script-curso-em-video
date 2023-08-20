var idade = 40;

if (idade < 16) {
    console.log('Não vota')
    
} else if (idade > 16 && idade < 18) {
    console.log('O voto é facultativo')

} else if (idade >= 18 && idade < 60) {    
    console.log('O voto é obrigatório')
} else{
    console.log('O voto é facultativo')
};
