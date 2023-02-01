//ETAPA 01
let weekDay = 'julho'

//ETAPA 02
if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}

else if (weekDay === 'sábado' || weekDay === 'sabado' || weekDay === 'domingo'){
    console.log('FINALMENTE, descanso merecido UwU');
}

//ACRESCENTEI UM NOVO ALGORITMO
else{
    console.log(weekDay + ', não é um dia da semana!');
}
