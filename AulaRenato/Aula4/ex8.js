/**
 * Capturar o momento exato (Data e Hora)
 */
var agora = new Date()
var diaSem = agora.getDay()
var dia 
switch(diaSem) {
    
    case 0:dia = 'Domingo'; break;
    case 1:dia = 'Segunda';  break;
    case 2:dia = 'Terça'; break;
    case 3:dia = 'Quarta'; ;break;
    case 4:dia = 'Quinta'; break;
    case 5:dia = 'Sexta'; break;
    case 6:dia = 'Sabado'; break;
    case 7:dia = 'Dia invalido'; break;
    default:
        break;
}
console.log(`Hoje é ${dia}`)