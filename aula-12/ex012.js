var agora = new Date();
var hrs = agora.getHours();

if(hrs >= 6 && hrs < 12){
console.log(`Agora são exatamente ${hrs} horas, Bom dia!`)

}else if(hrs >=12 && hrs <= 18) {
    console.log(`Agora são exatamente ${hrs} horas, Boa Tarde!`)

}else if(hrs >=18 && hrs <24) {
    console.log(`Agora são exatamente ${hrs} horas, Boa Noite!`)

}else {
    console.log(`Agora são exatamente ${hrs} horas, Boa Madrugada!`)
};