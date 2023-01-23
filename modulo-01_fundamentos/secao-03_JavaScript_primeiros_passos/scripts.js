//ETAPA 01
const currentHour = 23;
let message = null;

//ETAPA 02
if (currentHour >= 22) {
    massage = 'Não deveríamos comer nada, é hora de dormir';
}

else if(currentHour >= 18 && currentHour < 22) {
    massage = 'Rango da noite, vamos jantar :D';
}

else if(currentHour >= 14 && currentHour < 18) {
    massage = 'Vamos fazer um bolo pro café da tarde?';
}

else if(currentHour >= 11 && currentHour < 14) {
    massage = 'Hora do almoço!!!';
}

else{
    massage = 'Hmmm, cheiro de café recém-passado';
}

//ETAPA 03
console.log(massage);