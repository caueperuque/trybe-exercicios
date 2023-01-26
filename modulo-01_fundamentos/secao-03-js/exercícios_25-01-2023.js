//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

//O fatorial é representado pelo sinal !
//4! = 4 x 3 x 2 x 1 = 24

//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let result = 10;
for(let index = 11; index > 0; index -= 1){
    result = result * index
    console.log(result, index);
}
console.log(result);
