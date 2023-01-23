const num1 = 3;
const num2 = 5;
const num3 = 10;
let result = null;

if(num1 > num2 && num1 > num3){
    result = num1;
    console.log('O número', num1 , ', é maior que o número ', num2 , ', e maior que' ,num3);
}else if (num2 > num1 && num2 > num3){
    result = num2;
    console.log('O número', num2 , ', é maior que o número ', num3 , ', e maior que' ,num1);
}else if (num3 > num1 && num3 > num2){
    result = num3;
    console.log('O número', num3 , ', é maior que o número ', num2 , ', e maior que' ,num1);
}else{
    console.log('Os números são iguais!');
}