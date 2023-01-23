const num1 = 7;
const num2 = 5;
let result = null;

if(num1 > num2){
    result = num1;
    console.log('O número', num1 , ', é maior que o número ', num2);
}else if (num2 > num1){
    result = num2;
    console.log('O número', num2 , ', é maior que o número', num1);
}else{
    console.log('Os números são iguais!');
}